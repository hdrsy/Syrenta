"use client";
import React, {useState} from "react";
import AirBnbLogo from "airbnb/svg/airbnb-logo"
import Image from "next/image";
import {FiGlobe} from "react-icons/fi"
import {RxHamburgerMenu} from "react-icons/rx"
import ContextMenu from "../common/ContextMenu";
import { useAppStore } from "airbnb/store/store";
import { useRouter } from "next/navigation";

const Navbar = () => {
const {setAuthModal, userInfo, setUserInfo} = useAppStore();
const router = useRouter();
const [isContextMenuVisibile, setisContextMenuVisibile] = useState(false);  

const contextMenuOptions = [
  {
  name:"Login",
  callBack:()=> {
    setAuthModal();
    setisContextMenuVisibile(false);
  },
 },
 {
  name:"Signup",
  callBack:()=> {
    setAuthModal()
    setisContextMenuVisibile(false);
  },
 },
 {
  name:"Syrenta your home",
  callBack:()=> {
    setisContextMenuVisibile(false);
  },
 },
 {
  name:"Help",
  callBack:()=> {
    setisContextMenuVisibile(false);
  },
 },
] ;



const authenticatedContextMenuOptions = [
  {
    name:"Messages",
    callBack:()=>{
      setisContextMenuVisibile(false);
    },
  },
  {
    name:"Notifications",
    callBack:()=>{
      setisContextMenuVisibile(false);
    },
  },
  {
    name:"Trips",
    callBack:()=>{
      setisContextMenuVisibile(false);
      router.push("/trips");
    },
  },
  {
    name:"Wishlist",
    callBack:()=>{
      setisContextMenuVisibile(false);
      router.push("/wishlist");
    },
  },
  {
    name:"Manage Listings",
    callBack:()=> {
      setisContextMenuVisibile(false);
      router.push("/my-listings");
    },
  },
  {
    name:"Help",
    callBack:()=> {
      setisContextMenuVisibile(false);
    },
  },
  {
    name:"Logout",
    callBack:()=> {
      setUserInfo(null)
      setisContextMenuVisibile(false);
      localStorage.clear();
    },
  },
];
  return (
  <header className="w-full flex flex-col justify-center transition-all duration-300 h-20 border-b border-b-gray-200">
  <div className="flex items-center justify-between px-20">
  <div className="flex-grow basis-0">
  <div className="w-max cursor-pointer">
        <AirBnbLogo/>
    </div>
    </div>
    <div className="flex-grow basic-0">
      <ul className="flex items-center justify-end gap-6 font-medium">
        {
          userInfo?.id &&
        <li 
             className="cursor-pointer" 
             onClick={() => router.push("/new-listing")}
        >
          <span>Syrenta your home</span>
        </li>
        }
        <li className="cursor-pointer">
          <FiGlobe/>         
        </li>
        <li
             className="flex cursor-pointer items-center gap-2 border-gray-300 py-2 px-3 rounded-full hover:shadow-xl transition-all duration-500" 
             onClick={()=>setisContextMenuVisibile(true)}>

          <RxHamburgerMenu />
          { userInfo ? (
            <span className="flex justify-center items-center bg-black text-white h-7 w-7 text-sm rounded-full">
              {userInfo?.firstName?.split("").shift().toUpperCase()}</span> 
            ):(
          
          <span>
            <Image 
            src="/empty-profile.png"
            alt="profile"
            height={30}
            width={30}
            />
          </span>
          )}
        </li>
      </ul>
    </div>
    </div>
    {
      isContextMenuVisibile && (
      <ContextMenu 
      contextMenu={isContextMenuVisibile}
      setContextMenu={setisContextMenuVisibile}
      cordinates={{
        x:window.innerWidth - 250,
        y: 70,
      }} 
      options={
         userInfo ? authenticatedContextMenuOptions: contextMenuOptions
        }
      />
      )}
    </header>
 );
};

export default Navbar;
