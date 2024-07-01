import { Check } from "@mui/icons-material";

type VendorStepperProps = {
  currentStep: number;
};

const VendorStepper = ({ currentStep }: VendorStepperProps) => {
  const steps = ["Contact details", "Company details", "File upload"];

  const calculateProgress = () => {
    switch (currentStep) {
        case 0 : return 0; break;
        case 1 : return 50; break;
        case 2 : return 100; break;
        default: return 100;
    }
  };

  return (
    <div className="relative flex p-6 justify-center ">
      {steps.map((step, i) => (
        <div key={i} className={`flex flex-col items-center z-10 justify-between w-full`}>
          <div
            className={`h-12 w-12 rounded-full flex items-center justify-center font-black text-2xl
            ${currentStep > i ? "bg-green-300" : ""}
            ${currentStep === i ? "text-white bg-black" : ""}
            ${currentStep < i ? "bg-white" : ""}
            `}
          >
            {currentStep > i ? <Check fontSize="large" /> : i + 1}
          </div>
          <p className="font-black text-xs pt-2 md:text-2xl">{step}</p>
        </div>
      ))}
      <div className="lg:top-[31%] md:top-[25%] top-[34%] absolute w-[68%] h-3 bg-white">
        <div
          className="h-[100%] bg-green-300"
          style={{ width: `${calculateProgress()}%` }}
        ></div>
      </div>
    </div>
  );
};

export default VendorStepper;
