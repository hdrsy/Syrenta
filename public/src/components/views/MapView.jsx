import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow, LoadScript } from '@react-google-maps/api';
import ListingCard from "../listingCard";
import { useAppStore } from 'airbnb/store/store';

const MapView = ({ filteredListings = [] }) => {
  const { listings } = useAppStore(); // Keep using the original listings
  const [selectedListing, setSelectedListing] = useState(null);

  const mapStyles = {        
    height: "65vh",
    width: "100%"
  };

  // Default center - can be updated based on filteredListings
  const [mapCenter, setMapCenter] = useState({
    lat: 33.374661320689704,   
    lng: 36.39750686904758,
  });

  useEffect(() => {
    if (filteredListings.length > 0) {
      const latSum = filteredListings.reduce((sum, listing) => sum + listing.mapData.latitude, 0);
      const lngSum = filteredListings.reduce((sum, listing) => sum + listing.mapData.longitude, 0);
      setMapCenter({
        lat: latSum / filteredListings.length,
        lng: lngSum / filteredListings.length
      });
    }
  }, [filteredListings]);

  return (
    <div className="h-[72.5vh] max-w-[100vw] pt-2">
      <LoadScript
        googleMapsApiKey="AIzaSyAQqGaYBImwBfEwNfZEDkHDbOaJW7Pofrs"
      >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={7}
          center={mapCenter}
        >
          {filteredListings.map(listing => (
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
