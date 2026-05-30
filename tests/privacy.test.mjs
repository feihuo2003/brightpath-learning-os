import assert from 'node:assert/strict'
import test from 'node:test'

const privatePatterns = [
  /iris-family/i,
  /\/assets\/pics\//i,
  /\/assets\/voices\/[^/]+\/[^/]+/i,
]

function scan(urls) {
  return urls.flatMap((url) => privatePatterns.filter((pattern) => pattern.test(url)).map((pattern) => ({ url, pattern })))
}

test('demo URLs stay free of private asset patterns', () => {
  const urls = [
    '/assets/tenants/demo-family/demo-child/photos/demo-1.svg',
    '/api/progress?tenant=demo-family&child=demo-child',
  ]

  assert.equal(scan(urls).length, 0)
})

test('private asset patterns are detected', () => {
  const urls = [
    '/assets/pics/private-photo.jpg',
    '/api/progress?tenant=iris-family&child=iris',
  ]

  assert.equal(scan(urls).length, 2)
})

