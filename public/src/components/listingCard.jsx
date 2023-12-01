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
  // const pathname = usePathname();
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
    <div className="flex flex-col items-center justify-center gap-4 cursor-pointer w-full max-w-md mx-auto"
         onClick={() => router.push(`/listing/${data.id}`)}>
      <div className="w-full">
        <div className="relative w-full h-56">
          {data?.photos?.length > 0 && (
            <Image
              src={data.photos[0]}
              layout="fill"
              alt="listing"
              className="rounded-lg object-cover"
            />
          )}
          {userInfo && (
            <div className="absolute top-2 right-2 z-20">
              <IoMdHeart
                style={{ stroke: "white", strokeWidth: "40" }}
                className={`text-3xl ${wishlists?.includes(data.id) ? "text-airbnb-theme-color" : "text-[#00000099]"}`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!wishlists?.includes(data.id)) addToWishList(data.id);
                }}
              />
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{data.title}</h3>
          <span className="text-sm text-gray-600">{data.price} S.P</span>
        </div>
      </div>
      {isMyListing && (
        <button
          className="bg-airbnb-gradient py-2 px-4 text-white rounded-md"
          onClick={() => removeUserListing(data.id)}
        >
          Delete
        </button>
      )}
      {isWishList && (
        <button
          className="bg-airbnb-gradient py-2 px-4 text-white rounded-md"
          onClick={() => setWishListsPage(wishListsPage.filter(id => id !== wishListId))}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default ListingCard;
