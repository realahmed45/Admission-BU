import React from "react";

function Step6Orientation({ onPrev }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 6: Orientation</h2>
      <p>
        Orientation Date: <strong>15th Dec 2024</strong>
      </p>
      <p>Venue: Bahria University Auditorium</p>
      <button
        onClick={onPrev}
        className="bg-gray-500 text-white p-2 rounded-lg mt-4"
      >
        Previous
      </button>
    </div>
  );
}

export default Step6Orientation;
