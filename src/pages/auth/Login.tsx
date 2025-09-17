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
import { Eye, EyeOff, LoaderCircle, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import unAuthorizedApi from "@/components/helpers/constants";
import { toast } from "sonner";
import { useAuthStore } from "../../store/authStore";

const loginFormSchema = z.object({
  email: z.string(),
  password: z
    .string()
    .min(8, "Password is required")
    .max(20, "Password must not exceed 20 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one digit")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character"
    ),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  //save user details in the state
  const setUser = useAuthStore((s) => s.setUser);

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: z.infer<typeof loginFormSchema>) => {
      return unAuthorizedApi.post("/api/v1/auth/login", values);
    },
    onSuccess: (data) => {
      console.log("Login success:", data.data);
      toast.success(`Cheers, ${data.data.base.message}`);
      navigate("/dashboard/individual");
      setUser(data?.data.user);
      // localStorage.setItem("token", data.token);
    },
    onError: (error) => {
      console.error("Login failed:", error);
      toast.error(`Ooops, ${error.message}`);
    },
  });

  const onSubmit = (value: z.infer<typeof loginFormSchema>) => {
    // console.table(value);
    mutation.mutate(value);
    form.reset();
  };

  const watchedField = form.watch("password");
  return (
    <div className="px-4 md:w-3/4 md:mx-auto md:shadow-md md:rounded-lg md:border bg-card md:px-10 md:py-10">
      <BackButton />

      <div>
        <h2 className="text-2xl text-grey-normal font-semibold">Log In</h2>
        <p className="text-sm py-2 mb-4">Input your login credential </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User ID</FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-grey-light-active">
                      <Mail size={12} />
                    </span>
                    <Input
                      placeholder="Enter your email or phone number"
                      {...field}
                      className="pl-8"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
                <div className="text-sm flex items-center">
                  <p className="text-grey-light-active">
                    Forgot your password?
                  </p>
                  <Link
                    to="/onboarding/auth/reset-password"
                    className="text-blue-normal cursor-pointer ml-2"
                  >
                    Reset Here
                  </Link>
                </div>
              </FormItem>
            )}
          />

          {mutation.isPending ? (
            <Button
              type="button"
              disabled
              className="w-full bg-blue-normal hover:bg-blue-normal-hover cursor-pointer mt-6"
            >
              <LoaderCircle className="animate-spin 2s" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={!watchedField}
              className="w-full bg-blue-normal hover:bg-blue-normal-hover cursor-pointer mt-6"
            >
              Login
            </Button>
          )}
        </form>
      </Form>
      <div className="text-sm mt-8 flex items-center">
        <p className="text-grey-light-active">Dont have account?</p>
        <Link to="/" className="text-blue-normal cursor-pointer ml-2">
          Sign Up here
        </Link>
      </div>
    </div>
  );
};

export default Login;
