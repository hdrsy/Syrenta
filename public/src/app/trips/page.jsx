"use client";
import AuthModal from "airbnb/components/auth/AuthModal";
import CompactFooter from "airbnb/components/footer/CompactFooter";
import Footer from "airbnb/components/footer/Footer";
import { getUserTrips } from "airbnb/lib/lisitng";
import { useAppStore } from "airbnb/store/store";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, {useEffect, useState} from "react";
const Navbar = dynamic(() => import("airbnb/components/navbar/Navbar"),{
  ssr: false,
});

export default function Page() {
  const router = useRouter();
  const {userInfo } = useAppStore();
  const [tripInfo , settripInfo ] = useState([]);
  useEffect(() => {
    const getData =async () => {
      const data = await getUserTrips(userInfo?.id);
      settripInfo (data);
      console.log({ data });
    };
    if (userInfo) {
      getData();
    }
  }, []);

  function checkDateStatus(inputDate) {
    const currentDate = new Date();
    const providedDate = new Date(inputDate);

    if (providedDate < currentDate) {
      return "Completed";
    } else if (providedDate > currentDate) {
      return "Upcoming";
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Listing Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Check In Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Check out Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Trip Status 
                </th>
              </tr>
            </thead>
            <tbody>
              {tripInfo .map((trip, index) => (
                <tr
                className="bg-white border-b hover:bg-gray-100"
                key={index}
                >
                  <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap cursor-pointer"
                  onClick={() => router.push(`/listing/${trip.listing.id}`)}
                  >
                    {trip.listing.title}
                  </th>
                  <td className="px-6 py-4">{trip.tripInfo .startDate}</td>
                  <td className="px-6 py-4">{trip.tripInfo .endDate}</td>
                  <td className="px-6 py-4">{trip.tripInfo .price}</td>
                  <td className="px-6 py-4">
                    <span
                    className={`${
                      checkDateStatus(trip.tripInfo .startDate) === "Completed"
                      ? "bg-green-500"
                      : "bg-airbnb-theme-color"
                    } text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded `}
                    >
                      {checkDateStatus(trip.tripInfo .startDate)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}