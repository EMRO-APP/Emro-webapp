import { Outlet } from "react-router";
import { Card } from "../ui/card";
interface Feature {
  icon: string;
  text: string;
}

const onboardingLayout = () => {
  const features: Feature[] = [
    { icon: "/Frame 383.svg", text: "One-tap ambulance requests" },
    { icon: "/Frame 384.svg", text: "Gps tracking for rapid arrival" },
    {
      icon: "/Frame 385.svg",
      text: "Trusted, Certfied ambulance & security partners",
    },
    { icon: "/Frame 386.svg", text: "Quick, secure and easy to use" },
  ];
  return (
    <div className="flex h-screen">
      <aside className="hidden md:block md:w-1/2 md:p-20 onboarding-bg">
        <img src="/logo.svg" alt="logo" className="pb-20" />
        <h1 className="text-sm text-red-light-hover md:font-extrabold md:text-6xl md:block">
          Your No 1.{" "}
          <span className="text-blue-light-active md:block py-2">
            Emergency{" "}
          </span>{" "}
          <span className="text-blue-light-active md:block mb-24">
            Responder App
          </span>
        </h1>
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-2 py-2 text-white italic text-base"
          >
            <img src={feature.icon} alt="feature icon" />
            {feature.text}
          </li>
        ))}
      </aside>

        <main className="onboarding-bg md:flex-1 p-6 flex items-center justify-center min-h-screen">
          {/* Card visible only on mobile */}
          <div className="w-full md:hidden flex items-center justify-center">
            <Card className="w-full ">
            <Outlet />
            </Card>
          </div>
          {/* On desktop, just render the outlet without Card */}
          <div className="hidden md:block w-full">
            <Outlet />
          </div>
        </main>
    </div>
  );
};

export default onboardingLayout;
