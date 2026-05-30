# Architecture

BrightPath separates product code, curriculum, and learner state.

## Product Code

Shared UI and behavior:

- guided action card
- course map
- lesson stage tabs
- reward shelf
- parent dashboard
- progress sync status
- privacy checks

Product code must not contain private child data.

## Curriculum

Curriculum is versioned content, not user state.

```ts
export type CurriculumCatalog = {
  id: string
  version: string
  subject: SubjectId
  audience: 'elementary' | 'middle' | 'high-school' | 'college-prep'
  tracks: CurriculumTrack[]
}

export type Lesson = {
  id: string
  sequence: number
  title: string
  prerequisites: string[]
  steps: LessonStep[]
  estimatedMinutes: number
}
```

Placement chooses a starting point and focus. It does not rewrite released
catalogs.

## Learner State

Every child has private progress.

```ts
export type Tenant = {
  id: string
  featureFlags: Record<string, boolean>
}

export type Child = {
  id: string
  tenantId: string
  profile: ChildProfile
  enrollments: Enrollment[]
  privateAssets: PrivateAssetManifest
}

export type LearnerProgress = {
  childId: string
  subject: SubjectId
  activeLessonId: string
  completedLessonIds: string[]
  stepStates: Record<string, StepState>
  mistakes: Record<string, number>
  rewards: RewardState
  updatedAt: string
}
```

Demo learners and private learners share product code, but never share private
assets or progress records.

