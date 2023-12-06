import { useAppStore } from "airbnb/store/store";
import React from "react";

const Description = () => {
  const { description, setDescription } = useAppStore();
  return (
    <div className="flex flex-col items-center justify-center h-full text-airbnb-light-black px-4">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="font-semibold text-4xl">
          Create your description.
        </h2>
        <p>Share what makes your place special.</p>
      </div>
      <div className="flex flex-col gap-4 w-full max-w-lg">
        <textarea
          className="border border-gray-400 h-56 w-full rounded-lg active:border-gray-950 no-scrollbar text-lg p-4"
          value={description}
          onChange={(e) => {
            if (e.target.value.length <= 500) {
              setDescription(e.target.value);
            }
          }}
        />
        <span className="self-end">{description.length}/500</span>
      </div>
    </div>
  );
};

export default Description;
