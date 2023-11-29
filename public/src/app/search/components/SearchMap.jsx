import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const SearchMap = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('/api/listings')
      .then(response => response.json())
      .then(data => setListings(data));
  }, []);

  const mapStyles = {        
    height: "100vh",
    width: "100%"
  };
  
  const defaultCenter = {
    lat: 33.50377879543197, lng: 36.25305404177187
  }

  return (
    <LoadScript
      googleMapsApiKey='AIzaSyAQqGaYBImwBfEwNfZEDkHDbOaJW7Pofrs'
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        {
          listings.map(item => (
            <Marker key={item.id} position={{ lat: item.latitude, lng: item.longitude }} />
          ))
        }
      </GoogleMap>
     </LoadScript>
  );
}

export default SearchMap;
