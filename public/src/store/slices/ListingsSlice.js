export const createLisitingSlice = (set,get) => ({
    listing: [],
    isMapView: false,
    userListings:[],
    wishlists: [],
    wishListsPage: [],
    currentListing:undefined,
    setListings: (listings) => set({ listings }),
    setIsMapView: () => set({ isMapView: !get().isMapView}),
    setUserListings: (userListings) => set({ userListings }),
    removeUserListing: (listing) => {
        const listings = get().userListings;
        const index = listings.findIndex((list) => list.id === listing);
        if (index !== -1) {
            listing.splice(index, 1);
        }
        set({ userListings: listings});
    },
    setWishLists: (wishlists) => set({ wishlists }),
    addToWishList: (id) => {
        const lists = get().wishlists;
        lists.push(id);
        set({ wishlists: lists});
    },
    setWishListsPage: (wishListsPage) => set({ wishListsPage}),
    setCurrentListing: (currentListing) => set ({ currentListing}),
});