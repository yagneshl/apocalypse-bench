import { z } from 'zod';

const difficultySchema = z.enum(['Easy', 'Medium', 'Hard', 'Very Hard']);

export const rubricItemSchema = z
  .object({
    id: z.string().min(1),
    text: z.string().min(1),
    weight: z.number().positive().optional().default(1),
    maxScore: z.number().positive().optional().default(1),
  })
  .strict();

const datasetRubricSchema = z.union([
  z.array(z.string().min(1)).transform(values =>
    values.map((text, index) => ({ id: `r${index + 1}`, text })),
  ),
  z.array(rubricItemSchema),
]);

export const datasetLineSchema = z
  .object({
    id: z.string().min(1),
    area: z.string().min(1).optional(),
    category: z.string().min(1),
    title: z.string().min(1).optional(),
    difficulty: difficultySchema,
    scenario: z.array(z.string().min(1)),
    prompt: z.string().min(1),
    task_type: z.string().min(1).optional(),
    rubric: datasetRubricSchema,
    auto_fail: z.array(z.string().min(1)),
    reference_facts: z.array(z.string().min(1)).optional(),
    version: z.string().min(1).optional(),
    source: z.string().min(1).optional(),
  })
  .strict()
  .transform(v => {
    const rubric = v.rubric.map(r => ({
      id: r.id,
      text: r.text,
      weight: 'weight' in r ? r.weight : 1,
      maxScore: 'maxScore' in r ? r.maxScore : 1,
    }));

    return { ...v, rubric };
  });

export type DatasetLine = z.infer<typeof datasetLineSchema>;
