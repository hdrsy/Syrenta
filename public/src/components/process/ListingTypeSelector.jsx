import { listingTypes } from "airbnb/data/listingTypes";
import { useAppStore } from "airbnb/store/store";
import React from "react";

const ListingTypeSelector = () => {

const {locationType,setLocationType} = useAppStore ()
  
return (
  <div className="flex justify-center items-center max-h-[80vh] h-[80vh] px-4">
    <div className="w-full max-w-4xl">
      <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-center mb-6">
        Which of these best describes your place?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-h-[70vh] overflow-auto my-10 pb-5">
        {listingTypes.map((type) => (
          <button
            key={type.name}
            className={`flex flex-col items-center font-semibold border border-gray-300 rounded-md p-3 hover:border-gray-950 transition-all duration-300
            ${type.name === locationType?.name && "border-gray-950 bg-slate-100"}`}
            onClick={() => setLocationType(type)}
          >
            {type.svgPath}
            <span className="mt-2">{type.name}</span>
          </button>
        ))}
      </div>
    </div>
  </div>
);
};

export default ListingTypeSelector;
