import React from "react";

function Step2Cbt({ onNext, onPrev }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 2: CBT Results</h2>
      <p>
        Your CBT has been completed. Score: <strong>85%</strong>
      </p>
      <div className="flex justify-between mt-4">
        <button
          onClick={onPrev}
          className="bg-gray-500 text-white p-2 rounded-lg"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          className="bg-indigo-500 text-white p-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Step2Cbt;
