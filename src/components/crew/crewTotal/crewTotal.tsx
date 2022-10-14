import React from "react"
import { ICrewItem } from "../../../interface/crew/interface"
import "./style"
function CrewTotal (props: ICrewItem){
    return(
        <div className="crew-total-wrap item-container">
            <p className="crew-total-text">Total amount: {props.count} people on ISS</p>
        </div>
    )
}

export default CrewTotal