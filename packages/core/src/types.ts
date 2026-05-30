export type SubjectId = 'english' | 'math' | 'chinese' | 'ai-coding'

export type LearnerIdentity = {
  profile: string
  tenantId: string
  childId: string
  displayName: string
  isDemo: boolean
}

export type CurriculumCatalog = {
  id: string
  version: string
  subject: SubjectId
  audience: 'elementary' | 'middle' | 'high-school' | 'college-prep'
  tracks: CurriculumTrack[]
}

export type CurriculumTrack = {
  id: string
  title: string
  lessons: Lesson[]
}

export type Lesson = {
  id: string
  sequence: number
  title: string
  prerequisites: string[]
  steps: LessonStep[]
  estimatedMinutes: number
}

export type LessonStep = {
  id: string
  kind: 'concept' | 'model' | 'solve' | 'reflect' | 'reward'
  prompt: string
  answer?: string
  hint?: string
}

export type StepState = {
  status: 'not-started' | 'complete' | 'review-needed'
  attempts: number
  lastAnswer?: string
}

export type RewardState = {
  stars: number
  gems: Record<SubjectId, number>
  earnedBadges: string[]
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

