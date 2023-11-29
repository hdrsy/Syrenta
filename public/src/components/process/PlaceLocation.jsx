import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useAppStore } from 'airbnb/store/store';
import GeocoderControl from './geocoder-control';

const containerStyle = {
  width: '900px',
  height: '500px',
};

const center = {
  lat: 33.50377879543197,
  lng: 36.25305404177187,
};

const PlaceLocation = () => {
  const { setMapData,setLocationData } = useAppStore()
  const getResults = ({ result }) => {
    console.log(result);
    const [longitude,latitude] = result?.geometry?.coedinates;
    const data = {
      landmark: result?.text,
      neighborhood: "",
      postcode: "",
      locality:"",
      place:"",
      district:"",
      region:"",
      country:"",
    };
    result?.context?.forEach((item) =>{
      object.keys(data)?.forEach((key) => {
        if (item?.id?.startWith(key+".")) {
          data[key] =item?.text;
        }
      });
    });
  };
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [placeDetails, setPlaceDetails] = useState({});

  // Handler for map click event
  const handleMapClick = (event) => {
    const latLng = event.latLng.toJSON();
    setSelectedPosition(latLng); // Update local state with the selected position
     localStorage.setItem('event',JSON.stringify(event));
    // Here you would also update your global state/store or make an API call
    setMapData({
      latitude: latLng.lat,
      longitude: latLng.lng
    });
    
  };

  // Handler for place selection from GeocoderControl
  const handlePlaceSelected = (place) => {
    if (place && place.geometry) {
      const location = place.geometry.location;
      const position = { lat: location.lat(), lng: location.lng() };
      setSelectedPosition(position);
      setPlaceDetails({
        address: place.formatted_address,
        // Add other details you need from the place object
      });
      // Update global state or make API call with new data
      setMapData({
        latitude: position.lat,
        longitude: position.lng,
        address: place.formatted_address,
        // Add other details
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full gap-5">
      <h2 className="font-semibold text-4xl">
        Which of these best describes your place?
      </h2>
      <p>Your address is only shared with guests after they've made a reservation.</p>
      <div style={containerStyle}>
        <LoadScript googleMapsApiKey="AIzaSyAQqGaYBImwBfEwNfZEDkHDbOaJW7Pofrs">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
            onClick={handleMapClick}
          >
            {selectedPosition && (
              <Marker position={selectedPosition} />
            )}
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
