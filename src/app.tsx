import { useEffect, useState } from "react";
import './style.scss'
import { useDispatch, useSelector} from "react-redux";
import moment from "moment";
import { IISSPosition, IMapAction, IPosition } from "./interface/map/interface";
import { ITimeAction, ITimeStamp } from "./interface/time/interface";
import { ICrewArray, ICrewAction, ICrewPeople } from "./interface/crew/interface";
import Main from "./view/main";
import React from "react";
import { IRootState } from "./interface/root_interface";

const App = () => {
    const [start, setStart] = useState<boolean>(true)
    const updateTime: number = useSelector((state : IRootState) => state.time.updateTime)

    const dispatch = useDispatch()

    const checkPositionISS = ()=>{
        const ISSpositionAPI = 'http://api.open-notify.org/iss-now.json'
        fetch(ISSpositionAPI).then(res=>res.json())
        .then(data =>{
            const {iss_position}: IISSPosition = data
            const {latitude}: IPosition = iss_position
            const {longitude}: IPosition = iss_position

            const {timestamp}: ITimeStamp = data
            const time: string = moment.unix(timestamp).format("HH:mm")
            const date: string = moment.unix(timestamp).format("dddd, D MMM YYYY")

            dispatch<IMapAction>({type: 'SET_POSITION_LAT', payload: Number(latitude)})
            dispatch<IMapAction>({type: 'SET_POSITION_LNG', payload: Number(longitude)})

            dispatch<ITimeAction>({type: 'SET_TIME', payload: time})
            dispatch<ITimeAction>({type: 'SET_DATE', payload: date})
        })
    }

    const checkCrewISS = ()=>{
        const peopleInSpaceAPI = 'http://api.open-notify.org/astros.json'
        fetch(peopleInSpaceAPI).then(res => res.json())
        .then(data =>{
            const {people} : ICrewPeople = data 
            const ISSCrew = people.filter((elem: ICrewArray) => elem.craft == "ISS" )
            dispatch<ICrewAction>({type: 'SET_CREW', payload: ISSCrew})
        })
    }

    useEffect(()=>{
        if (start){
            checkPositionISS()
            checkCrewISS()
            setStart(false)
        }else{
            setInterval(()=>{
                checkPositionISS()
                checkCrewISS()
            }, updateTime * 1000)
        }
    })
    return(<><Main/></>)
}

export default App;
