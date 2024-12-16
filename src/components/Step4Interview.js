import React from "react";

function Step4Interview({ onNext, onPrev }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 4: Interview</h2>
      <p>
        Interview scheduled for: <strong>12th Dec 2024</strong>
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

export default Step4Interview;
