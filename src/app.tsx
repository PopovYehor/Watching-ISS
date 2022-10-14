import { useEffect, useState } from "react";
import './style.scss'
import { useDispatch} from "react-redux";
import moment from "moment";
import { IMapAction } from "./interface/map/interface";
import { ITimeAction } from "./interface/time/interface";
import { ICrewArray, ICrewAction } from "./interface/crew/interface";
import Main from "./view/main";
import React from "react";

const App = () => {
    const [start, setStart] = useState(true)

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

            dispatch<IMapAction>({type: 'SET_POSITION_LAT', payload: Number(latitude)})
            dispatch<IMapAction>({type: 'SET_POSITION_LNG', payload: Number(longitude)})

            dispatch<ITimeAction>({type: 'SET_TIME', payload: time})
            dispatch<ITimeAction>({type: 'SET_DATE', payload: date})
            if (start) setStart(false)
        })
    }

    const checkCrewISS = ()=>{
        const peopleInSpaceAPI = 'http://api.open-notify.org/astros.json'
        fetch(peopleInSpaceAPI).then(res => res.json())
        .then(data =>{
            const {people} = data
            const ISSCrew = people.filter((elem: ICrewArray) => elem.craft == "ISS" )
            dispatch<ICrewAction>({type: 'SET_CREW', payload: ISSCrew})
        })
    }

    useEffect(()=>{
        if (start){
            checkPositionISS()
            checkCrewISS()
        }else{
            setInterval(()=>{
                checkPositionISS()
                checkCrewISS()
            }, 5000)
        }
    })
    return(<><Main/></>)
}

export default App;
