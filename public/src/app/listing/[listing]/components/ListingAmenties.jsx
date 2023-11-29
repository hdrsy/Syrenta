import { AmenetiesType } from "airbnb/data/Amenities";
import { useAppStore } from "airbnb/store/store";
import React from "react";

const ListingAmenties = () => {

   const {currentListing } = useAppStore();
  function getSvgPathByName(name) {
    for (const amenity of AmenetiesType) {
      for (const data of amenity.data) {
        if (data.name === name) {
          return data.svgPath;
        }
      }
    }
    return null;
  }
  return( 
  <div className="flex flex-col gap-2">
  <h4 className="text-xl font-semibold">Ameneties</h4>
  <ul className="grid grid-cols-5 gap-2">
    {
      currentListing.placeAmeneties.map(amentiy=>( 
      <li 
      key={amentiy} 
      className="border border-gray-300 p-3 rounded-lg flex flex-col justify-start items-start"
      >
          {getSvgPathByName(amentiy)}
          <span>{amentiy}</span>  
      </li>
      ))}
  </ul>
  </div>
  );
};

export default ListingAmenties;
