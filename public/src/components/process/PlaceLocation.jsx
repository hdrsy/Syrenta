import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useAppStore } from 'airbnb/store/store';
import GeocoderControl from './geocoder-control';

const center = {
  lat: 33.50377879543197,
  lng: 36.25305404177187,
};

const PlaceLocation = () => {
  const { setMapData } = useAppStore();
  const [selectedPosition, setSelectedPosition] = useState(null);

  // Handler for map click event
  const handleMapClick = (event) => {
    const latLng = event.latLng.toJSON();
    setSelectedPosition(latLng); // Update local state with the selected position
    // Update your global state/store or make an API call
    setMapData({
      latitude: latLng.lat,
      longitude: latLng.lng
    });
  };

  // Handler for place selection from GeocoderControl
  const handlePlaceSelected = (place) => {
    // ... existing logic
  };

  return (
    <div className="flex flex-col items-center justify-center h-full gap-5 px-4">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold">
        Where is your place located?
      </h2>
      <p className="text-center">Your address is only shared with guests after they've made a reservation.</p>
      <div className="w-full max-w-4xl h-[500px]">
        <LoadScript googleMapsApiKey="AIzaSyAQqGaYBImwBfEwNfZEDkHDbOaJW7Pofrs">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={center}
            zoom={13}
            onClick={handleMapClick}
          >
            {selectedPosition && <Marker position={selectedPosition} />}
            <GeocoderControl
              googleMapsApiKey="AIzaSyAQqGaYBImwBfEwNfZEDkHDbOaJW7Pofrs"
              onPlaceSelected={handlePlaceSelected}
            />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default PlaceLocation;
