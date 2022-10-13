import { ITimeAction, ITimeState } from "../../interface/time/interface"
import { SET_DATE, SET_TIME } from "./type"
const defaultState = {
    time: '',
    date: '',
}

const reducerTime =(state: ITimeState = defaultState, action: ITimeAction)=>{
    switch (action.type){
        case SET_TIME:
            return {...state, time: action.payload}
        case SET_DATE:
            return {...state, date: action.payload}
        default:
            return state
    }
}

export {reducerTime}