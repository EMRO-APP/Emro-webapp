import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router";

const AuthOptions = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full md:w-3/4 mx-auto p-6 md:shadow-md md:rounded-lg md:border md:bg-card md:px-10 md:py-20">
      <div className="text-grey-normal px-2 md:px-0">
        <h2 className="text-2xl md:text-4xl font-semibold text-left py-4">
          Welcome to <span className="text-red-normal">Emro ✋</span>
        </h2>
        <p className="text-base">Your number one Emergency responder</p>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 mt-12">
        <Button
          size="lg"
          type="submit"
          className="cursor-pointer bg-blue-normal hover:bg-blue-normal-hover w-full"
          onClick={() => navigate("/onboarding/step-two")}
        >
          Sign Up Now
        </Button>
        <Button
          size="lg"
          type="submit"
          className="cursor-pointer bg-grey-light hover:bg-grey-light-hover w-full text-grey-normal"
        >
          Log in
        </Button>
      </div>

      <div className="mt-8">
        <Link to="/terms&conditions">
          <span className="text-sm underline text-blue-normal">
            Terms and Services
          </span>{" "}
          <span className="text-base">Apply</span>
        </Link>
      </div>
    </div>
  );
};

export default AuthOptions;
