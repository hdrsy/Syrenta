import React from "react";
import ListingCard from "../listingCard";
import { useAppStore } from "airbnb/store/store";

const ListView = () => {
  const { listings, selectedCategory } = useAppStore();

  console.log("Selected Category:", selectedCategory);
  console.log("Original Listings:", listings);

  let displayListings = selectedCategory
    ? listings.filter(listing => {
        return listing.locationType === selectedCategory;
      })
    : listings;

  console.log("Filtered Listings:", displayListings);

  if (!displayListings || displayListings.length === 0) {
    return <div>No listings available for the selected category.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-20 gap-10 py-10 justify-start items-start">
      {displayListings.map(listing => (
        <ListingCard key={listing.id} data={listing} />
      ))}
    </div>
  );
};

export default ListView;
