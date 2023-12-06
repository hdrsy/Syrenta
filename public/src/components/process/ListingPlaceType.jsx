import { useAppStore } from "airbnb/store/store";
import House from "airbnb/svg/lisitngTypes/house";
import Room from "airbnb/svg/lisitngTypes/room";
import SharedRoom from "airbnb/svg/lisitngTypes/shared-room";
import React from "react";

const ListingPlaceType = () => {
  const { placeType, setPlaceType } = useAppStore ();

  const data = [
    {
      title: "An entire place",
      subTitle: "Guests have the whole place to themselves.",
      svg: <House/>,
    },
    {
      title: "A room",
      subTitle: "Guests have their own room in a home, plus access to shared spaces.",
      svg: <Room/>,
    },
    {
      title: "A shared room",
      subTitle: "Guests sleep in a room or common area that may be shared with you or others.",
      svg: <SharedRoom/>,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-full gap-5 px-4 py-10">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold">
        Which of these best describes your place?
      </h2>
      <ul className="w-full max-w-4xl">
        {data.map((place) => (
          <li
            key={place.title}
            className={`flex flex-col md:flex-row items-center md:items-start border border-gray-300 rounded-md p-4 hover:border-gray-500 transition-all duration-300 cursor-pointer
            ${place.title === placeType?.title && "border-gray-950 bg-slate-100"}`}
            onClick={() => setPlaceType(place)}
          >
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              {place.svg}
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-semibold">{place.title}</h4>
              <p className="text-sm md:text-base">{place.subTitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
  };

export default ListingPlaceType;
