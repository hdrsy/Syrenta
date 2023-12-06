import { useAppStore } from "airbnb/store/store";
import React from "react";

const Price = () => {
  const { price, setPrice } = useAppStore();

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 py-10">
      <div className="flex flex-col gap-5 w-full max-w-lg">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-4xl text-center">
            Now set your price.
          </h2>
          <p className="text-center">You can change it anytime.</p>
        </div>
        <div className="flex flex-col gap-4">
          <textarea
            className="border border-gray-400 h-56 w-full rounded-lg active:border-gray-950 no-scrollbar text-4xl"
            value={price}
            onChange={(e) => {
              if (e.target.value) {
                setPrice(parseInt(e.target.value));
              } else setPrice(0);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
