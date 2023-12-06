import React from 'react';
import { useAppStore } from "airbnb/store/store";
import FormInput from "../common/FormInput";

const PlaceDetails = () => {
  const { locationData, setLocationData } = useAppStore();

  const handleChange = (name, value) => {
    setLocationData({ ...locationData, [name]: value });
  };

  return (
    <div className="flex justify-center items-center h-full flex-col gap-2 w-full px-4">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Confirm your address</h2>
        <p>Your address is only shared with guests after they've made a reservation.</p>
      </div>
      <div className="flex flex-col w-full items-center gap-3 h-full overflow-auto no-scrollbar pb-20 pt-5">
        <div className="flex flex-col gap-2 w-full max-w-md">
          <FormInput
            isListing
            name="neighborhood"
            placeholder="House, flat, bldg, etc."
            setValue={handleChange}
            type="text"
            value={locationData?.neighborhood || ''}
          />
          <FormInput
            isListing
            name="place"
            placeholder="Area/village (if applicable)"
            setValue={handleChange}
            type="text"
            value={locationData?.place || ''}
          />
          <FormInput
            isListing
            name="locality"
            placeholder="Street address"
            setValue={handleChange}
            type="text"
            value={locationData?.locality || ''}
          />
          <FormInput
            isListing
            name="landmark"
            placeholder="Nearby landmark (if applicable)"
            setValue={handleChange}
            type="text"
            value={locationData?.landmark || ''}
          />
          <FormInput
            isListing
            name="district"
            placeholder="City/town"
            setValue={handleChange}
            type="text"
            value={locationData?.district || ''}
          />
          <FormInput
            isListing
            name="postcode"
            placeholder="PIN code"
            setValue={handleChange}
            type="text"
            value={locationData?.postcode || ''}
          />
          <FormInput
            isListing
            name="country"
            placeholder="Country"
            setValue={handleChange}
            type="text"
            value={locationData?.country || ''}
          />
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
