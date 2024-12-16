import React from "react";

function StepNavigation({ currentStep }) {
  const steps = [
    "Application Form",
    "CBT Results",
    "Merit Calculation",
    "Interview",
    "Selection",
    "Orientation",
  ];

  return (
    <div className="flex justify-between mb-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`text-sm font-bold ${
            index + 1 === currentStep ? "text-indigo-600" : "text-gray-400"
          }`}
        >
          {index + 1}. {step}
        </div>
      ))}
    </div>
  );
}

export default StepNavigation;
