import React from "react"
import { useSelector } from "react-redux"
import { IRootState } from "../../interface/root_interface"

function Time (){
    const time = useSelector((state : IRootState) => state.time.time)
    const date = useSelector((state : IRootState) => state.time.date)
    return(
        <>
        <div className="item-container">
            <p className="item-title">Current UTC time: {time}</p>
            <p className="item-text">{date}</p>
        </div>
        </>
    )
}

export default Time