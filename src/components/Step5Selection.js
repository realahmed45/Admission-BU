import React from "react";

function Step5Selection({ onNext, onPrev }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 5: Admission Selection</h2>
      <p>Congratulations! You have been selected for admission.</p>
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

export default Step5Selection;
