import React, { useState } from "react";
import StepNavigation from "./components/StepNavigation";
import Step1Form from "./components/Step1Form";
import Step2Cbt from "./components/Step2Cbt";
import Step3Merit from "./components/Step3Merit";
import Step4Interview from "./components/Step4Interview";
import Step5Selection from "./components/Step5Selection";
import Step6Orientation from "./components/Step6Orientation";

function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1Form onNext={nextStep} />;
      case 2:
        return <Step2Cbt onNext={nextStep} onPrev={prevStep} />;
      case 3:
        return <Step3Merit onNext={nextStep} onPrev={prevStep} />;
      case 4:
        return <Step4Interview onNext={nextStep} onPrev={prevStep} />;
      case 5:
        return <Step5Selection onNext={nextStep} onPrev={prevStep} />;
      case 6:
        return <Step6Orientation onPrev={prevStep} />;
      default:
        return <Step1Form onNext={nextStep} />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <StepNavigation currentStep={step} />
      <div className="container mx-auto bg-white p-6 shadow-lg rounded-lg">
        {renderStep()}
      </div>
    </div>
  );
}

export default App;
