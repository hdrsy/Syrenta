import { createListingAPI } from "airbnb/lib/lisitng";
import { useAppStore } from "airbnb/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Confetti from "react-confetti";

const ListingCreated = () => {
  const router = useRouter ();
  const{
    userInfo,
      locationType,
      placeType,
      mapData,
      locationData,
      placeSpace,
      placeAmeneties,
      photos,
      title,
      description,
      price,
} = useAppStore();

  useEffect(()=> {
    alert(userInfo.id);
    createListingAPI({
      locationType: locationType.name,
      placeType: placeType.title,
      mapData,
      locationData,
      placeSpace,
      placeAmeneties,
      photos,
      title,
      description,
      price,
      listingCreatedBy: { id: userInfo?.id },
    });
  },[ 
    userInfo,
    locationType,
    placeType,
    mapData,
    locationData,
    placeSpace,
    placeAmeneties,
    photos,
    title,
    description,
    price,
  ]);

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full px-4 py-10">
      <div className="flex flex-col gap-2 items-center justify-center text-center">
        <h2 className="font-semibold text-4xl">Congratulations!</h2>
        <p>You have successfully created your listing!</p>
        <div className="flex flex-col sm:flex-row gap-5">
          <button
            className="bg-[#222222] py-3 px-5 text-white text-base font-medium rounded-md cursor-pointer w-full sm:w-auto"
            onClick={() => router.push("/")}
          >
            Visit Home Page
          </button>
          <button
            className="bg-airbnb-gradient py-3 px-5 text-white text-base font-medium rounded-md cursor-pointer w-full sm:w-auto"
            onClick={() => router.push("/my-listings")}
          >
            View your listings
          </button>
        </div>
      </div>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
    </div>
  );
};


export default ListingCreated;
