import { z } from "zod";

//tmp in real proj we need to get from DB or have somewhere in config
export enum UserSex {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export const UserBaseSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(15, { message: "Name must be at most 15 characters long" }),
  firstName: z
    .string()
    .min(3, { message: "First name must be at least 3 characters long" })
    .max(15, { message: "First name must be at most 15 characters long" }),
  lastName: z
    .string()
    .min(3, { message: "Last name must be at least 3 characters long" })
    .max(15, { message: "Last name must be at most 15 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone must be at least 10 characters long" })
    .optional()
    .or(z.literal("")),
  birthday: z.coerce.date().optional(),
  sex: z.enum([UserSex.MALE, UserSex.FEMALE], { message: "Sex is required" }),
  subjects: z.array(z.string()).optional(),
});
export type userBaseSchema = z.infer<typeof UserBaseSchema>;
