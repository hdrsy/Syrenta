import React from "react";
import ListingCard from "../listingCard";
import { useAppStore } from "airbnb/store/store";


const ListView = () => {
   const { listings } = useAppStore();

  return (
    <div className="grid grid-cols-5 h-[80vh] px-20 gap-10 py-10 justify-start items-start">
    {listings && Array.isArray(listings) && listings.map((listing, index) => (
      <ListingCard key={listing.id} data={listing} />
    ))}
  </div>
  );
};

export default ListView;
