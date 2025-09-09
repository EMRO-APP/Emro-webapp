import BackButton from "@/components/ui/back-button";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import {  useNavigate } from "react-router";


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

const loginFormSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: z.string().min(8, "Password is required"),
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

const CompletePasswordReset = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();
    
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
    
  const onSubmit = (data: z.infer<typeof loginFormSchema>) => {
    console.table(data);
      toast.success("Cheers, Password Changed Sucessfully.");
    form.reset();
      navigate("/onboarding/auth/login");
    };
    
    const watchedField = form.watch("confirmPassword");
    
  return (
    <div className="px-4 md:w-3/4 md:mx-auto md:shadow-md md:rounded-lg md:border bg-card md:px-10 md:py-10">
      <BackButton />

      <div>
        <h2 className="text-2xl text-grey-normal font-semibold">
          Reset Password
        </h2>
        <p className="text-sm py-2 mb-4">Input your new password </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-grey-light-active">
                      <Lock size={12} />
                    </span>
                    <Input
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                      className="pl-8"
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#363538]"
                      tabIndex={-1}
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confrim Password</FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-grey-light-active">
                      <Lock size={12} />
                    </span>
                    <Input
                      placeholder="Enter your password"
                      type={showConfirmPassword ? "text" : "password"}
                      className="pl-8"
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#363538]"
                      tabIndex={-1}
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                    >
                      {showConfirmPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={!watchedField}
            className="w-full bg-blue-normal hover:bg-blue-normal-hover cursor-pointer mt-6"
          >
            Confirm Password
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CompletePasswordReset;
