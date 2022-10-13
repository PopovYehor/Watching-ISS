import { useEffect } from "react"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { ICrewAction, ICrewArray } from "../../interface/crew/interface"
import { IRootState } from "../../interface/root_interface"

function Crew (){
    
    const dispatch = useDispatch()
    const crews = useSelector((state : IRootState) => state.crew.crew)

    const checkCrewISS = ()=>{
        const peopleInSpaceAPI = 'http://api.open-notify.org/astros.json'
        fetch(peopleInSpaceAPI).then(res => res.json())
        .then(data =>{
            const {people} = data
            const ISSCrew = people.filter((elem: ICrewArray) => elem.craft == "ISS" )
            ISSCrew.map( (element: ICrewArray) => dispatch<ICrewAction>({type: 'SET_CREW', payload: element.name}) )
        })
    }
    
    useEffect(()=>{
        checkCrewISS()
    }, [])

  return(<></>)  
}

export default Crew