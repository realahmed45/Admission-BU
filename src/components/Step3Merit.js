import React from "react";

function Step3Merit({ onNext, onPrev }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 3: Merit Calculation</h2>
      <p>Merit calculated using Matric (90%), FSc (92%), and CBT (85%).</p>
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

export default Step3Merit;
