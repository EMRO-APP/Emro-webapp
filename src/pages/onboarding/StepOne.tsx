import { onboardingSchema } from "@/components/onboarding/schema";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router";
import { use } from "react";
import useOnboardingStore from "@/components/onboarding/store";

const onboardingStepOneFormSchema = onboardingSchema.pick({
  userType: true,
});

type onboardingStepOneSchema = z.infer<typeof onboardingStepOneFormSchema>;

const userTypeInfo = [
  {
    id: "enterprise",
    title: "As an Enterprise",
    label: "For Organizations & Large instituitions",
  },
  {
    id: "individual",
    title: "As an individual",
    label: "For end users",
  },
  {
    id: "partner",
    title: "As a partner",
    label: "For Drivers, Ambulance Service Providers etc.",
  },
] as const;

const StepOne = () => {
  // 1. Define your form.
  const form = useForm<onboardingStepOneSchema>({
    resolver: zodResolver(onboardingStepOneFormSchema),
    defaultValues: {
      userType: undefined,
    },
  });

  const userType = form.watch("userType");
  const navigate = useNavigate();
  const setData = useOnboardingStore((state) => state.setData);

  const onSubmit = (data: onboardingStepOneSchema) => {
    console.table(data);
    setData(data);
    navigate("/onboarding/step-two");
    };
    
  return (
    <div className="w-full flex flex-col items-start justify-center h-full space-y-6 md:mx-auto md:max-w-xl">
      <div className="text-grey-normal px-2 md:px-0">
        <h2 className=" text-2xl md:text-4xl font-semibold text-left py-4">
          Welcome to <span className="text-red-normal">Emro ✋</span>
        </h2>
        <p className="text-base">Chose a category to sign up</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full px-2  md:px-0 md:w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="userType"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col"
                  >
                    {userTypeInfo.map((info) => {
                      return (
                        <div key={info.id} className="cursor-pointer">
                          <Card className="px-2 hover:bg-muted transition-all duration-200 w-full">
                            <FormItem className="flex items-center gap-3 ">
                              <FormControl>
                                <RadioGroupItem value={info.id} />
                              </FormControl>
                              <div className="flex flex-col">
                                <FormLabel className="font-normal">
                                  {info.title}
                                </FormLabel>
                                <FormDescription>{info.label}</FormDescription>
                              </div>
                            </FormItem>
                          </Card>
                        </div>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={!userType}
            size="lg"
            type="submit"
            className="cursor-pointer bg-blue-normal hover:bg-blue-normal-hover w-full"
          >
            Proceed
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default StepOne;
