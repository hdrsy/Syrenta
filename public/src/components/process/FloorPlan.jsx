import { useAppStore } from "airbnb/store/store";
import React from "react";

const FloorPlan = () => {
  const { placeSpace, setPlaceSpace } = useAppStore();

  const handleIncrement = (type) =>
    setPlaceSpace({ ...placeSpace, [type]: placeSpace[type] + 1 });

  const handleDecrement = (type) =>
    setPlaceSpace({ ...placeSpace, [type]: Math.max(placeSpace[type] - 1, 0) });

  return (
    <div className="flex justify-center items-center h-full flex-col gap-5 px-4">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Share some basics about your place
        </h2>
        <p>You'll add more details later, such as bed types.</p>
      </div>
      <div className="flex flex-col w-full max-w-lg gap-5">
        {Object.keys(placeSpace).map((place) => (
          <div key={place} className="flex justify-between w-full text-lg items-center">
            <span className="capitalize">{place}</span>
            <div className="flex gap-4 items-center">
              <button
                className="border border-gray-200 py-2 px-4 rounded-full flex items-center justify-center hover:border-gray-500"
                onClick={() => handleDecrement(place)}
                disabled={placeSpace[place] <= 0}
              >
                -
              </button>
              <span>{placeSpace[place]}</span>
              <button
                className="border border-gray-200 py-2 px-4 rounded-full flex items-center justify-center hover:border-gray-500"
                onClick={() => handleIncrement(place)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloorPlan;
