import Link from "next/link";
import React from "react";
import { FiGlobe } from "react-icons/fi";
import {PiCaretUpBold} from "react-icons/pi"


export default function Footer() {
  const links = [
    "privacy",
    "terms",
    "sitemap",
    "company details",
    "destination",

  ];
  return (<div 
   className="fixed bottom-0 left-0 w-full px-20 border-t border-t-gray-200 py-4 flex justify-between w-full text-sm z-50 bg-white items-center">
    <ul className="flex gap-3 font-normal">
    <li>&copy; {new Date().getFullYear()} Syrenta, Inc</li>
    {links.map((link) => (
      <li key={link}>
         <Link href="#" className="capitalize"> 
         {link}
         </Link> 
         </li>
    ))}
    </ul>
    <ul className="flex gap-4 font-medium">
      <li className="flex items-center gap-2 cursor-pointer">
        <FiGlobe /> English (IN)
      </li>
      <li className="curser-pointer"> S.P </li>
      <li className="flex items-center gap-2 cursor-pointer">
         Support & resources <PiCaretUpBold/>
         </li>
    </ul>
  </div>
  );
}
