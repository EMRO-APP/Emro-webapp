import { StepProgress } from "../ui/step-progress";
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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { LoaderCircle, Lock, Mail } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import localGovt from "../../data/lga.json";
import { useState } from "react";
import { type Step } from "@/components/ui/step-progress";
import { Card, CardDescription } from "../ui/card";
import sub from "@/data/sub.json";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const steps: Step[] = [
  {
    id: 1,
    title: "Profile Setup",
    status: "completed" as const,
  },
  //  {
  //    id: 2,
  //    title: "Choose Subscription",
  //    description: "Select your preferred plan",
  //    status: "current" as const,
  //  },
  {
    id: 3,
    title: "Payment Details",
    status: "upcoming" as const,
  },
];

const profileFormSchema = z.object({
  fullName: z.string(),
  emergencyContactName: z.string(),
  emergencyContactNumber: z.string().regex(/^0\d{10}$/, "Invalid phone number"),
  location: z.string(),
  profilePicture: z.string().optional(),
});

const planFormSchema = z.object({
  plans: z.string(),
});

const ProfileIndividual = () => {
  const [show, setShow] = useState(false);
  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      fullName: "",
      emergencyContactName: "",
      emergencyContactNumber: "",
      location: "",
      profilePicture: "",
    },
  });

  const planForm = useForm<z.infer<typeof planFormSchema>>({
    resolver: zodResolver(planFormSchema),
    defaultValues: {
      plans: "",
    },
  });

  const watch = planForm.watch("plans")

  const onSubmit = (value: z.infer<typeof profileFormSchema>) => {
    console.table(value);
    // mutation.mutate(value);
    form.reset();
  };

  const onSubmitPlan = (value: z.infer<typeof planFormSchema>) => {
    console.table(value);
    // mutation.mutate(value);
    form.reset();
  };

  const updatedSteps = show
    ? steps.map((s, i) =>
        i === 1 ? { ...s, status: "completed" as "completed" } : s
      )
    : steps;

  return (
    <div className="border-2 rounded-2xl h-full">
      <div className="grid grid-cols-2 w-[90%] mx-auto my-6">
        <div>
          <StepProgress steps={updatedSteps} />
        </div>

        {/* Profile deatils */}
        {!show && (
          <div>
            <h2 className="text-3xl text-grey-normal font-semibold">
              Profile Setup
            </h2>
            <p>Ensure to enter your correct credentials</p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
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
                  name="emergencyContactName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Emergency Contact Name</FormLabel>
                      <FormControl>
                        <div className="relative flex items-center">
                          <span className="absolute left-3 text-grey-light-active">
                            <Lock size={12} />
                          </span>
                          <Input
                            placeholder="Enter name"
                            className="pl-8"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="emergencyContactNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Emergency Contact Number</FormLabel>
                      <FormControl>
                        <div className="relative flex items-center">
                          <span className="absolute left-3 text-grey-light-active">
                            <Lock size={12} />
                          </span>
                          <Input
                            placeholder="Enter number"
                            className="pl-8"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Location</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="w-full">
                          <SelectTrigger>
                            <SelectValue placeholder="Location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {localGovt.map((location) => (
                            <SelectItem key={location.id} value={location.city}>
                              {location.city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* <Button
              type="button"
              disabled
              className="w-full bg-blue-normal hover:bg-blue-normal-hover cursor-pointer mt-6"
            >
              <LoaderCircle className="animate-spin 2s" />
            </Button> */}

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    type="submit"
                    // disabled={!watchedField}
                    className="w-full bg-blue-normal hover:bg-blue-normal-hover cursor-pointer mt-6"
                  >
                    Submit
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    className="w-full hover:bg-blue-light cursor-pointer mt-6 "
                    onClick={() => setShow((prev) => !prev)}
                  >
                    Subscribe
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        )}

        {/* Subscription details */}
        {show && (
          <div>
            <h2 className="text-3xl text-grey-normal font-semibold mb-6">
              Subscribtion plan
            </h2>
            <p className="mb-6">Select a plan</p>

            <div>
              <Form {...planForm}>
                <form
                  onSubmit={planForm.handleSubmit(onSubmitPlan)}
                  className="w-full px-2 md:px-0 md:w-2/3 space-y-6"
                >
                  <FormField
                    control={planForm.control}
                    name="plans"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col"
                          >
                            {sub.map((info) => (
                              <div
                                key={info.id}
                                className="grid grid-cols-5 gap-4"
                              >
                                {/* Monthly card */}
                                <div className="col-span-2">
                                  <Card className="px-2 hover:bg-muted transition-all duration-200 w-full mb-4">
                                    <FormItem className="flex items-center gap-3">
                                      <FormControl>
                                        <RadioGroupItem
                                          value={`${info.id}-monthly`}
                                        />
                                      </FormControl>
                                      <div className="flex flex-col">
                                        <FormLabel className="font-normal">
                                          {info.title}
                                        </FormLabel>

                                        <span className="font-semibold">
                                          ${info.pricing.monthly}/month
                                        </span>
                                      </div>
                                    </FormItem>
                                  </Card>
                                </div>

                                {/* Yearly card */}
                                <div className="col-span-3">
                                  <Card className="px-2 hover:bg-muted transition-all duration-200 w-full">
                                    <FormItem className="flex items-center gap-3">
                                      <FormControl>
                                        <RadioGroupItem
                                          value={`${info.id}-yearly`}
                                        />
                                      </FormControl>
                                      <div className="flex flex-col">
                                        <FormLabel className="font-normal">
                                          Pay Yearly
                                        </FormLabel>

                                        <div className="flex space-x-2 items-center">
                                          <p className="font-semibold">
                                            ${info.pricing.yearly}{" "}
                                          </p>{" "}
                                          <p className="text-sm  bg-green-light text-green-normal-active px-2">
                                            {" "}
                                            25% OFF
                                          </p>
                                        </div>
                                      </div>
                                    </FormItem>
                                  </Card>
                                </div>
                              </div>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    size="lg"
                    type="submit"
                    disabled={!watch}
                    className="cursor-pointer bg-blue-normal hover:bg-blue-normal-hover w-full"
                  >
                    Check out
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileIndividual;
