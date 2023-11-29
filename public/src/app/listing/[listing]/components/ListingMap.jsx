import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import { useAppStore } from "airbnb/store/store";

const ListingMap = () => {
  const { currentListing } = useAppStore();

  const mapStyles = {        
    height: "100%",
    width: "100%"
  };

  return (
    <div className="h-96 w-full">
      <LoadScript
        googleMapsApiKey="AIzaSyAQqGaYBImwBfEwNfZEDkHDbOaJW7Pofrs"
      >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={{
            lat: currentListing.mapData.latitude,
            lng: currentListing.mapData.longitude
          }}
        >
          <Marker
            position={{
              lat: currentListing.mapData.latitude,
              lng: currentListing.mapData.longitude
            }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default ListingMap;
