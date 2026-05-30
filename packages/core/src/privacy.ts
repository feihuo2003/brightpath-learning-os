const PRIVATE_PATTERNS = [
  /iris-family/i,
  /\/assets\/pics\//i,
  /\/assets\/voices\/[^/]+\/[^/]+/i,
  /KV_REST_API_TOKEN/i,
  /UPSTASH_REDIS_REST_TOKEN/i,
  /BLOB_READ_WRITE_TOKEN/i,
]

export type PrivacyFinding = {
  value: string
  pattern: string
}

export function scanRenderedUrlsForPrivateAssets(urls: string[]): PrivacyFinding[] {
  const findings: PrivacyFinding[] = []
  for (const value of urls) {
    for (const pattern of PRIVATE_PATTERNS) {
      if (pattern.test(value)) {
        findings.push({ value, pattern: String(pattern) })
      }
    }
  }
  return findings
}

export function assertDemoSafeUrls(urls: string[]): void {
  const findings = scanRenderedUrlsForPrivateAssets(urls)
  if (findings.length) {
    throw new Error(`Demo output includes private-looking URLs: ${JSON.stringify(findings, null, 2)}`)
  }
}

