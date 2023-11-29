export const createProcesSlice = (set,get) => ({
    locationType:undefined,
    placeType:undefined,
    mapData:undefined,
    locationData:undefined,
    placeSpace: {bathrooms:1, beds:1, guests:4},
    placeAmeneties: [],
    photos:[],
    title:'',
    description:'',
    price:0,
    setLocationType: (locationType) => set({locationType}),
    setPlaceType: (placeType) => set({ placeType}),
    setMapData: (mapData) => set({mapData}),
    setLocationData: (locationData) => set({locationData}),
    setPlaceSpace:(placeSpace) => set({placeSpace}),
    setPlaceAmeneties: (placeAmeneties) => set({placeAmeneties}),
    setPhotos:(photos)=> set({photos}),
    setTitle: (title) => set({title}),
    setDescription: (description) => set({description}),
    setPrice: (price) => set({price}),
});