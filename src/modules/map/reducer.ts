import { CHANGE_POSITION_LAT, CHANGE_POSITION_LNG } from "./type"
import { IMapAction, IMapState } from "../../interface/map/interface"
const defaultState = {
    lat: 0,
    lng: 0,
}

const reducerMap =(state: IMapState = defaultState, action: IMapAction)=>{
    switch (action.type){
        case CHANGE_POSITION_LAT:
            return {...state, lat: action.payload}
        case CHANGE_POSITION_LNG:
            return {...state, lng: action.payload}
        default:
            return state
    }
}

export {reducerMap}