import type { LearnerIdentity } from './types.js'

const SAFE_ID = /^[a-z0-9][a-z0-9-]{1,62}$/i

export function safeIdentityPart(value: string | null | undefined, fallback: string): string {
  const candidate = (value || '').trim()
  return SAFE_ID.test(candidate) ? candidate : fallback
}

export function resolveLearnerIdentity(params: URLSearchParams): LearnerIdentity {
  const profile = safeIdentityPart(params.get('profile'), 'demo-child')
  const childId = safeIdentityPart(params.get('child'), profile)
  const tenantId = safeIdentityPart(params.get('tenant'), `${profile}-family`)
  const isDemo = tenantId === 'demo-family'
  const displayName = (params.get('name') || params.get('childName') || (isDemo ? 'Demo Learner' : childId))
    .trim()
    .slice(0, 80)

  return {
    profile,
    tenantId,
    childId,
    displayName,
    isDemo,
  }
}

export function progressStorageKey(productId: string, identity: LearnerIdentity): string {
  return `${productId}:tenant:${identity.tenantId}:child:${identity.childId}`
}

