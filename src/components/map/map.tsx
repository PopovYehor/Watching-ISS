import React, { useEffect } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useDispatch} from "react-redux/es/exports"
import { IRootState } from '../../interface/root_interface';
import { IMapAction } from '../../interface/map/interface';
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./style"
import moment from 'moment';
import { ITimeAction } from '../../interface/time/interface';


function Map() {
    const dispatch = useDispatch()
    const checkPositionISS = ()=>{
        const ISSpositionAPI = 'http://api.open-notify.org/iss-now.json'
        fetch(ISSpositionAPI).then(res=>res.json())
        .then(data =>{
            
            const {iss_position} = data
            const {latitude} = iss_position
            const {longitude} = iss_position
            const time = moment.unix(data.timestamp).format("HH:mm")
            const date = moment.unix(data.timestamp).format("dddd, D MMM YYYY")

            dispatch<IMapAction>({type: 'CHANGE_POSITION_LAT', payload: Number(latitude)})
            dispatch<IMapAction>({type: 'CHANGE_POSITION_LNG', payload: Number(longitude)})
            dispatch<ITimeAction>({type: 'SET_TIME', payload: time})
            dispatch<ITimeAction>({type: 'SET_DATE', payload: date})
        })
    }

    const positionISS = {
        lat: useSelector((state: IRootState) => state.map.lat),
        lng: useSelector((state: IRootState) => state.map.lng)
    };

    useEffect(()=>{
        checkPositionISS()
    }, [])
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