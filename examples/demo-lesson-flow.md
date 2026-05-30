# Demo Lesson Flow

This example shows the product behavior BrightPath is designed around.

## Learner

```text
tenant=demo-family
child=demo-child
profile=demo-child
```

## Flow

1. Placement asks a few broad questions.
2. The app estimates the learner's current level and focus areas.
3. The app chooses a personalized starting lesson instead of forcing a fixed grade path.
4. The learner completes concept, model, solve, and reflect steps.
5. A wrong or hard item is saved for review instead of blocking the child.
6. Lesson completion unlocks a small reward such as stars, a badge, or a gem.
7. The parent dashboard shows progress, rewards, and recommended next action.
8. The demo page renders only demo-safe images and data.

## Expected Event Shape

```json
[
  { "type": "placement.started" },
  { "type": "placement.completed", "startLessonId": "math-demo-001" },
  { "type": "lesson.step.completed", "stepId": "concept-1" },
  { "type": "lesson.step.review_needed", "stepId": "solve-2" },
  { "type": "lesson.completed", "lessonId": "math-demo-001" },
  { "type": "dashboard.summary.updated" }
]
```
