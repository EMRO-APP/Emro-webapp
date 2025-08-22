import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";

const BackButton = () => {
      const navigate = useNavigate();
  return (
    <div className="text-grey-normal flex mb-8">
      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="cursor-pointer"
      >
        <ChevronLeft size={24} />
        <p className="text-sm">Go Back</p>
      </Button>
    </div>
  );
};

export default BackButton;
