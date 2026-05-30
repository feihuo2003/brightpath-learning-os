import type { LearnerProgress, Lesson, RewardState, StepState, SubjectId } from './types.js'

export function blankRewards(): RewardState {
  return {
    stars: 0,
    gems: {
      english: 0,
      math: 0,
      chinese: 0,
      'ai-coding': 0,
    },
    earnedBadges: [],
  }
}

export function createBlankProgress(childId: string, subject: SubjectId, firstLesson: Lesson): LearnerProgress {
  return {
    childId,
    subject,
    activeLessonId: firstLesson.id,
    completedLessonIds: [],
    stepStates: Object.fromEntries(
      firstLesson.steps.map((step) => [step.id, { status: 'not-started', attempts: 0 } satisfies StepState]),
    ),
    mistakes: {},
    rewards: blankRewards(),
    updatedAt: new Date().toISOString(),
  }
}

export function markStepComplete(progress: LearnerProgress, stepId: string, answer?: string): LearnerProgress {
  return {
    ...progress,
    stepStates: {
      ...progress.stepStates,
      [stepId]: {
        status: 'complete',
        attempts: (progress.stepStates[stepId]?.attempts || 0) + 1,
        lastAnswer: answer,
      },
    },
    updatedAt: new Date().toISOString(),
  }
}

export function saveStepForReview(progress: LearnerProgress, stepId: string, answer?: string): LearnerProgress {
  return {
    ...progress,
    stepStates: {
      ...progress.stepStates,
      [stepId]: {
        status: 'review-needed',
        attempts: (progress.stepStates[stepId]?.attempts || 0) + 1,
        lastAnswer: answer,
      },
    },
    mistakes: {
      ...progress.mistakes,
      [stepId]: (progress.mistakes[stepId] || 0) + 1,
    },
    updatedAt: new Date().toISOString(),
  }
}

export function isLessonComplete(lesson: Lesson, progress: LearnerProgress): boolean {
  return lesson.steps.every((step) => progress.stepStates[step.id]?.status === 'complete')
}

