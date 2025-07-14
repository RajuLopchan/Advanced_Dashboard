import { z } from "zod";

export const aboutSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email").min(1, "Email is required"),
  dateOfBirth: z
    .string()
    .min(1, "Date of Birth is required")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in yyyy-mm-dd format"),
  city: z.string().min(1, "City is required"),
  postalCode: z
    .string()
    .regex(/^\d{4,6}$/, "Postal code must be 4-6 digits")
    .min(1, "Postal code is required"),
});

export const accountSchema = z.object({
  activities: z.array(z.string()).min(1, "Select at least one activity"),
});

export const addressSchema = z.object({
  streetname: z.string().min(1, "Street name is required"),
  streetno: z.string().min(1, "Street number is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
});

export const combinedSchema = aboutSchema
  .merge(accountSchema)
  .merge(addressSchema);
