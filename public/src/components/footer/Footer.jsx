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
  return (
    <div className="fixed bottom-0 left-0 w-full px-4 md:px-20 border-t border-t-gray-200 py-4 flex flex-col md:flex-row justify-between text-sm z-50 bg-white items-center">
      <ul className="flex flex-wrap gap-3 font-normal">
        <li>&copy; {new Date().getFullYear()} Syrenta, Inc</li>
        {links.map((link) => (
          <li key={link}>
            <Link href="#">
              <span className="capitalize cursor-pointer">{link}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex gap-4 font-medium mt-4 md:mt-0">
        <li className="flex items-center gap-2 cursor-pointer">
          <FiGlobe /> English (IN)
        </li>
        <li className="cursor-pointer"> S.P </li>
        <li className="flex items-center gap-2 cursor-pointer">
          Support & resources <PiCaretUpBold />
        </li>
      </ul>
    </div>
  );
}
