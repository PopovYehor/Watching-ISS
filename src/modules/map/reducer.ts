import { SET_POSITION_LAT, SET_POSITION_LNG } from "./type"
import { IMapAction, IMapState } from "../../interface/map/interface"

const defaultState: IMapState = {
    lat: 0,
    lng: 0,
}

const reducerMap =(state: IMapState = defaultState, action: IMapAction)=>{
    switch (action.type){
        case SET_POSITION_LAT:
            return {...state, lat: action.payload}
        case SET_POSITION_LNG:
            return {...state, lng: action.payload}
        default:
            return state
    }
}

export {reducerMap}