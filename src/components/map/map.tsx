import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { IRootState } from '../../interface/root_interface';
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./style"

function Map() {
    const positionISS = {
        lat: useSelector((state: IRootState) => state.map.lat),
        lng: useSelector((state: IRootState) => state.map.lng)
    };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDD422a-2JSxXbkK0NPX2gH3ZEyBHYsvfI">
      <GoogleMap
        mapContainerClassName = "map-container"
        center={positionISS}
        zoom={5}
        options={{
            fullscreenControl:false,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
        }}
      >
          <Marker position={positionISS}/>
      </GoogleMap>
    </LoadScript>
  )
}

export default Map