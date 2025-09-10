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
import { useNavigate } from "react-router";
import { Mail } from "lucide-react";

const loginFormSchema = z.object({
  email: z.email("Valid email is required"),
});

const PasswordReset = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof loginFormSchema>) => {
    console.table(data);
    //   toast.success("Cheers, Account Verified.");
    form.reset();
    navigate("/onboarding/step-three", {
      state: { from: "/onboarding/auth/reset-password" },
    });
  };

  const watchedField = form.watch("email");
  return (
    <div className="px-4 md:w-3/4 md:mx-auto md:shadow-md md:rounded-lg md:border bg-card md:px-10 md:py-10">
      <BackButton />

      <div>
        <h2 className="text-2xl text-grey-normal font-semibold">
          Forgot your password?{" "}
        </h2>
        <p className="text-sm py-2 mb-4">
          An OTP will be sent to your registered email{" "}
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-grey-light-active">
                      <Mail size={12} />
                    </span>
                    <Input
                      placeholder="Enter your email "
                      {...field}
                      className="pl-8"
                    />
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
            Reset Password
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PasswordReset;
