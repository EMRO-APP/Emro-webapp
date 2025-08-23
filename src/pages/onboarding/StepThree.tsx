import BackButton from "@/components/ui/back-button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { onboardingSchema } from "@/components/onboarding/schema";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import useOnboardingStore from "@/components/onboarding/store";

const onboardingStepThreeFormSchema = onboardingSchema.pick({
  otp: true,
});

type onboardingStepThreeSchema = z.infer<typeof onboardingStepThreeFormSchema>;

const StepThree = () => {
  const form = useForm<onboardingStepThreeSchema>({
    resolver: zodResolver(onboardingStepThreeFormSchema),
    defaultValues: {
      otp: "",
    },
  });

  const watchedField = form.watch("otp");

  // Resend OTP timer state
  const [timer, setTimer] = useState(59);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isDisabled && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsDisabled(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isDisabled, timer]);

  const handleResend = () => {
    setIsDisabled(true);
    setTimer(59);
  };
  const onSubmit = (data: onboardingStepThreeSchema) => {
    const { otp, ...storedDataWithoutOtp } = useOnboardingStore
      .getState()
      .getData();
    console.table({ ...data, ...storedDataWithoutOtp });
    toast.success("Cheers, Account Verified.");
    form.reset();
    //   navigate("/onboarding/step-three");
  };
  return (
    <div className="px-4 md:w-3/4 md:mx-auto md:shadow-md md:rounded-lg md:border bg-card md:px-10 md:py-10">
      <BackButton />

      <div>
        {/*  TODO: make email dynamic and dont reveal it all */}
        <h2 className="text-2xl text-grey-normal font-semibold">
          Verify Account
        </h2>
        <p className="text-sm py-2 mb-4">
          A 6 digit OTP has been sent to{" "}
          {(() => {
            const email =
              useOnboardingStore.getState().getData()?.email || "your email";
            const [name, domain] = email.split("@");
            if (!domain) return email;
            const masked =
              name.slice(0, 2) + "*".repeat(Math.max(0, name.length - 2));
            return masked + "@" + domain;
          })()}
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOTP maxLength={6} {...field} className="w-full">
                    <InputOTPGroup className="flex w-full ">
                      <InputOTPSlot index={0} className="flex-1" />
                      <InputOTPSlot index={1} className="flex-1" />
                      <InputOTPSlot index={2} className="flex-1" />
                      <InputOTPSlot index={3} className="flex-1" />
                      <InputOTPSlot index={4} className="flex-1" />
                      <InputOTPSlot index={5} className="flex-1" />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={!watchedField}
            className="w-full bg-blue-normal hover:bg-blue-normal-hover cursor-pointer mt-10"
          >
            Confirm
          </Button>
        </form>
      </Form>
      <div className="text-sm mt-8 flex items-center">
        <p className="text-grey-light-active">Didn't receive code?</p>
        <Button
          variant="ghost"
          className="text-blue-normal cursor-pointer"
          disabled={isDisabled}
          onClick={handleResend}
        >
          {isDisabled
            ? `0:${timer.toString().padStart(2, "0")}s`
            : "Resend Otp"}
        </Button>
      </div>
    </div>
  );
};

export default StepThree;
