import * as React from 'react'
import { useSelector } from "react-redux"
import { ICrewArray } from "../../interface/crew/interface"
import { IRootState } from "../../interface/root_interface"
import CrewTotal from "./crewTotal/crewTotal"
import "./style"
function Crew (){

  const crews: ICrewArray[] = useSelector((state : IRootState) => state.crew.crew)

  return(
    <>
    <div className="crew-wrap">
      {crews.map((element: ICrewArray, i: number) => {return(
        <div className="crew-item-wrap" key={i}>
          <img className='crew-item-img' src='https://png.pngtree.com/png-vector/20220608/ourmid/pngtree-unidentified-user-illustration-mysterious-social-png-image_4816405.png'/>
          <span className="crew-item-text">{element.name}</span>
        </div> 
      )})}
      <CrewTotal count = {crews.length}/>
    </div>
    </>
  )  
}

export default Crew