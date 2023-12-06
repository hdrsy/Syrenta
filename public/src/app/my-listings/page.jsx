"use client";
import Footer from "airbnb/components/footer/Footer";
import ListingCard from "airbnb/components/listingCard";
import { getUserListings } from "airbnb/lib/lisitng";
import { useAppStore } from "airbnb/store/store";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
const Navbar = dynamic(()=> import("airbnb/components/navbar/Navbar"), {
  ssr:false,
});

const page = () => {
const { userInfo,userListings,setUserListings } = useAppStore ();

  useEffect(()=> {
    const getData = async () => {
      const data = await getUserListings (userInfo.id);
        setUserListings(data);
    };

     if(userInfo) {
      getData();
     }
   }, [userInfo]);

   return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {userListings.map((listing, index) => (
              <ListingCard data={listing} isMyListing key={listing.id} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default page;
