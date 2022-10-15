import React from "react"
import { useSelector } from "react-redux"
import { IRootState } from "../../interface/root_interface"
import { ITimeState } from "../../interface/time/interface"

function Time (){
    const dateData: ITimeState = {
        time: useSelector((state : IRootState) => state.time.time),
        date: useSelector((state : IRootState) => state.time.date)
    }
    return(
        <>
        <div className="item-container">
            <p className="item-title">Current UTC time: {dateData.time}</p>
            <p className="item-text">{dateData.date}</p>
        </div>
        </>
    )
}

export default Time