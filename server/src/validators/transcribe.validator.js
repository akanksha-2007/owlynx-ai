import { z } from 'zod'

export const transcribeBodySchema = z.object({
  language: z
    .string()
    .regex(/^[a-z]{2,3}(-[A-Z]{2})?$/, 'Use a language code like "en" or "hi-IN"')
    .default('en'),
})