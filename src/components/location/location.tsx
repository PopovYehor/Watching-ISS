import React from "react"
import { useSelector } from "react-redux"
import { IRootState } from "../../interface/root_interface"

function Locations (){
    const lat = useSelector((state: IRootState) => state.map.lat)
    const lng = useSelector((state: IRootState) => state.map.lng)
    
    return (
        <>
        <div className="item-container">
            <p className="item-title">ISS is now located at:</p>
            <p className="item-text">longitude: {lat}, latitude: {lng}</p>
        </div>
        </>
    )
}

export default Locations