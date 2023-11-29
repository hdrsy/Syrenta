import { 
  addToWishlists,
   deleteListingAPI,
  removeFromWishListAPI,
  } from "airbnb/lib/lisitng";
import { useAppStore } from "airbnb/store/store";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdHeart } from "react-icons/io";

const ListingCard = ({
   data,
   isMyListing = false,
   isWishList = false,
   wishListId = undefined,
  }) => {
 const {
     removeUserListing,
     userInfo,
     addToWishList,
     wishlists,
     wishListsPage,
     setWishListsPage,
  } = useAppStore();
  const pathname = usePathname();
  const router = useRouter();

  const deleteListing = async () => {
     const response = await deleteListingAPI(data.id);
     if (response) {
      removeUserListing(data.id);
     }
  };
  const addWishList = async () => {
    await addToWishlists (data.id, userInfo?.id);
    addToWishList(data.id);
    };

  const deleteWishlist = async () => {
    await removeFromWishListAPI(wishListId);
    const index = wishListsPage.findIndex((list) => list.id === wishListId);
    if (index !== -1) {
      wishListsPage.splice(index, 1);
      setWishListsPage(wishListsPage);
    }
  };  

  return (
    <div className="flex items-center justify-center flex-col gap-1"
     onClick={()=>router.push(`/listing/${data.id}`)}
    >
      <div className="flex items-center justify-center cursor-pointer w-full">
        <div className="flex flex-col gap-2">
          <div className="relative w-64 h-56">
            {data?.photos?.length && (
              <Image 
              src={data.photos[0]} 
              fill 
              alt="listing" 
              className="rounded-lg object-cover" 
              />
              )}
              {pathname === "/" && userInfo && (
                <div className="absolute z-20 right-2 top-2">
                  <IoMdHeart
                  style={{ stroke: "white", strokeWidth: "40"}}
                  className={`text-3xl ${
                    wishlists?.includes(data.id)
                    ? "text-airbnb-theme-color"
                    : "text-[#00000099]"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();

                    if (!wishlists?.includes(data.id)) addWishList();
                    
                  }}
                  />
                </div>
              )}
        </div>
        <div>
          <h3>{data.title}</h3>
          <span>{data.price} S.P</span>
        </div>
      </div>
    </div>
     {isMyListing && (
      <button
      className="bg-airbnb-gradient py-3 mt-5 px-5 text-white text-base font-medium rounded-md cursor-pointer w-80"
      onClick={deleteListing}
      >
        Delete 
      </button>
     )}
     {isWishList && (
      <button
         className="bg-airbnb-gradient py-3 mt-5 px-5 text-white text-base"
         onClick={deleteWishlist}
         >
          Delete 
         </button>
     )}
  </div>
  );
};

export default ListingCard;
