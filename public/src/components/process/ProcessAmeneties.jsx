import { AmenetiesType } from "airbnb/data/Amenities";
import { useAppStore } from "airbnb/store/store";
import React from "react";

const ProcessAmeneties = () => {
  const { placeAmeneties, setPlaceAmeneties } = useAppStore();
  const addAmenity = (name) => setPlaceAmeneties([...placeAmeneties, name]);
  const removeAmenity = (name) => {
    const index = placeAmeneties.findIndex((amenity) => amenity === name);
    if (index !== -1) {
      const clonedAmenities = [...placeAmeneties];
      clonedAmenities.splice(index, 1);
      setPlaceAmeneties(clonedAmenities);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-10 lg:px-20 py-10">
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-center">Tell guests what your place has to offer</h2>
        <p className="text-center">You can add more amenities after you publish your listing.</p>
        <div className="flex flex-col gap-4 max-h-[65vh] overflow-auto no-scrollbar">
          {AmenetiesType.map(({ type, data }) => (
            <div key={type} className="flex flex-col gap-5">
              {type === "advanced" && (
                <span className="text-lg font-medium">Do you have any standout amenities?</span>
              )}
              {type === "safety" && (
                <span className="text-lg font-medium">Do you have any safety items?</span>
              )}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {data.map(({ name, svgPath }) => (
                  <button
                    key={name}
                    className={`flex flex-col justify-start font-semibold border border-gray-300 rounded-md p-3 hover:border-gray-950 transition-all duration-300 ${placeAmeneties?.includes(name) && "border-gray-950"}`}
                    onClick={() => (placeAmeneties?.includes(name) ? removeAmenity(name) : addAmenity(name))}
                  >
                    {svgPath}
                    <span className="text-airbnb-black font-medium">{name}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessAmeneties;
