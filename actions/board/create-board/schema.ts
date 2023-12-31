import { z } from 'zod'

export const CreateBoardSchema = z.object({
  title: z
    .string({
      required_error: 'Please provide a title',
      invalid_type_error: 'Please provide a title',
    })
    .min(6, {
      message: 'That title is too short',
    }),
  image: z.string({
    required_error: 'Please select an image',
    invalid_type_error: 'Please select an image',
  }),
})
