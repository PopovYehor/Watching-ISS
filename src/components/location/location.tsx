import { LinearProgress } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { IRootState } from "../../interface/root_interface"
import "./style"
function Locations (){
    const lat: number = useSelector((state: IRootState) => state.map.lat)
    const lng: number = useSelector((state: IRootState) => state.map.lng)

    const updateTime: number = useSelector((state : IRootState) => state.time.updateTime)
    
    const [update, setUpdate] = useState<number>(updateTime)
    const [progress, SetProgress] = useState<number>(0)

    useEffect(()=>{
        const intervalTime = setInterval(() => {
            setUpdate((update: number) => update - 1)
        }, 1000)
        const intervalProgress = setInterval(() => {
            SetProgress((progress: number) => progress + (10.2/updateTime))
        }, 100)
        return () =>{ 
            clearInterval(intervalTime)
            clearInterval(intervalProgress)
            setUpdate(updateTime)
            SetProgress(0)
        }
    }, [lat])

    return (
        <>
        <div className="item-container">
            <p className="item-title">ISS is now located at:</p>
            <div className="update-position">
                <span className="item-text">longitude: {lat}, latitude: {lng}</span>
                <span className="item-title update-time">Update after {update} seconds</span>
            </div>
        </div>
        <LinearProgress className="progress-bar" variant="determinate" value={progress} />
        </>
    )
}

export default Locations