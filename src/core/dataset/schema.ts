import { z } from 'zod';

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
    category: z.string().min(1),
    difficulty: z.string().min(1),
    scenario: z.array(z.string().min(1)),
    prompt: z.string().min(1),
    rubric: datasetRubricSchema,
    auto_fail: z.array(z.string().min(1)),
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
