import React, { useState, useCallback } from 'react';
import { GoogleMap, Marker, LoadScript, Autocomplete } from '@react-google-maps/api';

const libraries = ["places"];

const GeocoderControl = ({ onPlaceSelected, googleMapsApiKey }) => {
  const [marker, setMarker] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = useCallback((autoC) => setAutocomplete(autoC), []);
  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      onPlaceSelected(place); // Pass the selected place to the parent component
      if (place.geometry) {
        setMarker({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
      }
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };

  const containerStyle = {
    width: '100%',
    height: '100%'
  };

  const center = {
    lat: 33.50377879543197,
    lng: 36.25305404177187
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAQqGaYBImwBfEwNfZEDkHDbOaJW7Pofrs"
      libraries={libraries}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {marker && <Marker position={marker} />}
        <Autocomplete
          onLoad={onLoad}
          onPlaceChanged={onPlaceChanged}
        >
          <input
            type="text"
            placeholder="Enter a location"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              top: "10px",
              left: "10px"
            }}
          />
        </Autocomplete>
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(GeocoderControl);
