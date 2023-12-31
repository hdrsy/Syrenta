"use client";
import AuthModal from "airbnb/components/auth/AuthModal";
import Footer from "airbnb/components/footer/Footer";
import ListView from "airbnb/components/views/ListView";
import MapView from "airbnb/components/views/MapView";
import ViewSwitchBadge from "airbnb/components/views/ViewSwitchBadge";
import { listingTypes } from "airbnb/data/listingTypes";
import { getAllListingsAPI, getUserWishlists } from "airbnb/lib/lisitng";
import { useAppStore } from "airbnb/store/store";
import React, { useEffect } from "react";
const Navbar = dynamic(() => import("airbnb/components/navbar/Navbar"), {
  ssr: false,
});
import dynamic from "next/dynamic";

const Page = () => {
  const { isAuthModalOpen, setListings, isMapView, userInfo, setWishLists, listings, selectedCategory,
  setSelectedCategory } = useAppStore();

  const handleCategoryClick = (category) => {
    console.log("Category clicked:", category);
    // Call the action directly to update the selected category
    setSelectedCategory(category);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getAllListingsAPI();  
      setListings(data);
      const wishlists = await getUserWishlists(userInfo?.id);
      const wishListsId = wishlists?.map(({ listing }) => listing.id);
      setWishLists(wishListsId);
    };

    getData();
  }, [setListings, setWishLists]);

  const filteredListings = selectedCategory
    ? listings.filter(listing => listing.locationType === selectedCategory)
    : listings;

  return (
    <div className="max-h-[100vh] h-[100vh]">
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="w-[90vw] overflow-auto no-scrollbar mt-3 px-5">
          <ul className="flex gap-5 h-full">
            {listingTypes.map((data) => (
              <li
                key={data.name}
                className="w-max flex flex-col items-center justify-btween h-16 cursor-pointer"
                onClick={() => handleCategoryClick(data.name)}
              >
                <span className="h-10 w-10 flex items-center justify-center">
                  {data.svgPath}
                </span>
                <div className="text-xs font-semibold break-keep" style={{ width: "inherit" }}>
                  {data.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ViewSwitchBadge />
      {isMapView ? <MapView filteredListings={filteredListings} /> : <ListView />}
      <Footer />
      {isAuthModalOpen && <AuthModal />}
    </div>
  );
};

export default Page;
