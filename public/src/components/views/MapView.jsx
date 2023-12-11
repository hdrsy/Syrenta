import React, { useState } from 'react';
import { GoogleMap, Marker, InfoWindow, LoadScript } from '@react-google-maps/api';
import { useAppStore } from "airbnb/store/store";
import ListingCard from "../listingCard";

const MapView = () => {
  const { listings } = useAppStore();
  const [selectedListing, setSelectedListing] = useState(null);

  const mapStyles = {        
    height: "65vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 33.5037787954319,
    lng: 36.25305404177187
  };

  return (
    <div className="h-[72.5vh] max-w-[100vw] pt-2">
      <LoadScript
        googleMapsApiKey="AIzaSyAQqGaYBImwBfEwNfZEDkHDbOaJW7Pofrs"
      >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={11}
          center={defaultCenter}
        >
          {listings.map(listing => (
            <Marker
              key={listing.id}
              position={{
                lat: listing.mapData.latitude,
                lng: listing.mapData.longitude
              }}
              onClick={() => setSelectedListing(listing)}
            />
          ))}
          {selectedListing && (
            <InfoWindow
              position={{
                lat: selectedListing.mapData.latitude,
                lng: selectedListing.mapData.longitude
              }}
              onCloseClick={() => setSelectedListing(null)}
            >
              <div>
                <ListingCard data={selectedListing} />
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
      
    </div>
  
  );
};

export default MapView;
