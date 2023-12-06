import axios from "axios";
import { createUrl, post } from "./http";
import qs from "qs";

export const createListingAPI = async (listingData) => {
        const result = await post(createUrl("/api/listings"), {
            ...listingData,
        }).catch( () => null );
        console.log({ result });
        if (!result.data) {
            return alert("Could not create listing");
        }
        return result;
    };

export const getAllListingsAPI = async () => {
        const result = await axios.get(createUrl(`/api/listings`));

        if (!result) {
            alert("Could not get all listings!");
            return [];
        }
        return result.data;
    };
     

export const getUserListings = async (userId) => {
        const query = qs.stringify({
            where: { listingCreatedBy: { id: userId } },
        });
        const result = await axios.get(createUrl(`/api/listings?${query}`));
        if (!result) {
            alert("Could not get user listings!");
            return [];
        }
        return result.data;
    
    };

export const deleteListingAPI = async (id) => {
        const result = await axios.delete(createUrl(`/api/listings/${id}`));
        if (!result) {
            alert("Cannot delete listing");
        };
            return result;
  
    };

export const getUserWishlists = async (userId) => {
        const query = qs.stringify({
            where: {
                user: { id: userId },
            },
            select: {
                listing: true,
            },
        });
        const result = await axios.get(createUrl(`/api/wishlists?${query}`))
        .catch(() => null);
        // if (result?.data) {
        //     alert("Failed to get user wishlists");
        //     return [];
        // }
        return result.data;
    
    };

export const addToWishlists = async (id, userId) => {
        const query = {
            
             listing: { id },
            user: { id: userId },
        };
        const result = await post(createUrl("/api/wishlists"), {...query});
        if (!result.data) {
           return alert("Could not create wishlist");
        }
            return result.data;
           

    };
        

export const removeFromWishListAPI = async (id) => {
        const result = await axios.delete(createUrl(`/api/wishlists/${id}`));
        if (!result) {
            console.log("Cannot delete");
        }
        
            return result;
    };

export const getListing = async (listingId) => {
        const result = await axios.get(createUrl(`api/listings/${listingId}`));
        if (!result) {
            alert("No listing with given id");
             }
        return result.data;
    }; 

export const addTrip = async (data) => {
        const query = {
            listing: {
                id: data.listingId,
            },
            user: { id: data.userId },
            tripInfo : data.tripInfo ,
        };
        const result = await axios.post(createUrl("/api/trips"), {...query});
        if (!result) {
            alert("Failed to add trip");
        } else {
            return result;
        }
        
    }; 

export const getUserTrips = async (userId) => {
        const query = qs.stringify({
            where: {
                user: { id: userId },
            },
            select: {
                listing: true,
            },
        });
        const result = (
            await axios.get(createUrl(`/api/trips?${query}`)).catch(() => null)
        )?.data;
         
        console.log({ result });
        return result;
};