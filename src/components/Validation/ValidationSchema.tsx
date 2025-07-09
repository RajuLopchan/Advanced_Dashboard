import { z } from "zod";

export const formSchema = z.object({
  taskName: z
    .string()
    .min(1, "Task Name is required")
    .max(15, "Task Name must be at most 15 characters"),

  teamName: z
    .string()
    .min(1, "Team Name is required")
    .max(15, "Team Name must be at most 15 characters"),

attachments: z
  .string()
  .min(1, "Attachments is required")
  .refine(val => !isNaN(Number(val)) && Number(val) >= 1 && Number(val) <= 100, {
    message: "Attachments must be a number between 1 and 100",
  }),

messages: z
  .string()
  .min(1, "Messages is required")
  .refine(val => !isNaN(Number(val)) && Number(val) >= 1 && Number(val) <= 100, {
    message: "Messages must be a number between 1 and 100",
  }),

daysRemaining: z
  .string()
  .min(1, "Days Remaining is required")
  .refine(val => !isNaN(Number(val)) && Number(val) >= 1 && Number(val) <= 365, {
    message: "Days Remaining must be between 1 and 365",
  }),

});

export type FormSchema = z.infer<typeof formSchema>;
