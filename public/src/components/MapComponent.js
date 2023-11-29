import React, { useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapComponent = () => {
  const mapStyles = {        
    height: "500px",
    width: "100%"
  };

  const defaultCenter = {
    lat:33.50377879543197,
    lng:36.25305404177187
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAQqGaYBImwBfEwNfZEDkHDbOaJW7Pofrs"
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={8}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

export default MapComponent;
