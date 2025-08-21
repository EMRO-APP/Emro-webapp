import { onboardingSchema } from "@/components/onboarding/schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ChevronLeft, Eye, EyeOff, Lock, Mail, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const onboardingStepTwoFormSchema = onboardingSchema.pick({
  phoneNumber: true,
  email: true,
  password: true,
  confirmPassword: true,
});
type onboardingStepTwoSchema = z.infer<typeof onboardingStepTwoFormSchema>;

const StepTwo = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const form = useForm<onboardingStepTwoSchema>({
    resolver: zodResolver(onboardingStepTwoFormSchema),
    defaultValues: {
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Check if all fields are empty
  const watchedField = form.watch("confirmPassword");

  const onSubmit = (data: onboardingStepTwoSchema) => {
    console.table(data);
    // navigate("/onboarding/auth-options");
  };

  return (
    //   <div className="">
    <div className="px-4 md:w-3/4 md:mx-auto md:shadow-md md:rounded-lg md:border bg-card md:px-10 md:py-10">
      <div className="text-grey-normal flex">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        >
          <ChevronLeft size={24} />
          <p className="text-sm">Go Back</p>
        </Button>
      </div>

      <div>
        <h2 className="text-2xl text-grey-normal font-semibold">Sign Up</h2>
        <p className="text-sm py-2 mb-4">Enter your credentials</p>
      </div>

      <div className="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* phone number */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <div className="relative flex items-center">
                      <span className="absolute left-3 text-grey-light-active">
                        <Phone size={12} />
                      </span>
                      <Input
                        placeholder="Enter your phone digits"
                        {...field}
                        className="pl-8"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative flex items-center">
                      <span className="absolute left-3 text-grey-light-active">
                        <Mail size={12} />
                      </span>
                      <Input
                        placeholder="Enter email"
                        {...field}
                        className="pl-8"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* password */}
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
                        placeholder="Enter password"
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

            {/* confirm password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative flex items-center">
                      <span className="absolute left-3 text-grey-light-active">
                        <Lock size={12} />
                      </span>
                      <Input
                        placeholder="Enter password"
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
              className="w-full bg-blue-normal hover:bg-blue-normal-hover"
            >
              Submit
            </Button>
          </form>
        </Form>
        <div className="text-sm mt-8 ">
          <p>
            Have an existing account?
            <Link to="/auth/login" className="underline text-blue-normal ml-4">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
    //   </div>
  );
};

export default StepTwo;
