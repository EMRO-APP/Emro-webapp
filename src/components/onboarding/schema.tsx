import z from "zod";

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .max(20, "Password must not exceed 20 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one digit")
  .regex(
    /[^A-Za-z0-9]/,
    "Password must contain at least one special character"
);
  
export const onboardingSchema = z
  .object({
    userType: z.enum(["enterprise", "individual", "partner"]),
    phoneNumber: z
      .string()
      .min(11, "Phone number can only be 11 chracters")
      .max(11, "Phone number can only be 11 characters"),
    email: z.email("Valid email is required"),
    password: passwordSchema,
    confirmPassword: z.string(),
    otp: z.string().min(6, "OTP must be 6 Digit").max(6, "OTP must be 6 Digit"),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match.",
        path: ["confirmPassword"],
      });
    }
  });

export type onboardingSchema = z.infer<typeof onboardingSchema>;