import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapComponent = () => {
  // Responsive map size
  const [mapSize, setMapSize] = useState({
    height: "500px",
    width: "100%"
  });

  const defaultCenter = {
    lat: 33.50377879543197,
    lng: 36.25305404177187
  };

  useEffect(() => {
    const handleResize = () => {
      setMapSize({
        height: window.innerHeight * 0.5 + "px",
        width: window.innerWidth + "px"
      });
    };

    window.addEventListener('resize', handleResize);

    // Set initial size
    handleResize();

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAQqGaYBImwBfEwNfZEDkHDbOaJW7Pofrs"
    >
      <GoogleMap
        mapContainerStyle={mapSize}
        zoom={8}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

export default MapComponent;
