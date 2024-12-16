import React from "react";

function Step1Form({ onNext }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 1: Application Form</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded-md"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Matric Marks"
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="FSc Marks"
          className="w-full p-2 border rounded-md"
        />
        <button
          type="button"
          onClick={onNext}
          className="bg-indigo-500 text-white p-2 rounded-lg w-full"
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default Step1Form;
