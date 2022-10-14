import { ICrewState, ICrewAction } from "../../interface/crew/interface"
import { SET_CREW } from "./type"
const defaultState: ICrewState = {
    crew: [],
}

const reducerCrew =(state: ICrewState = defaultState, action: ICrewAction)=>{
    switch (action.type){
        case SET_CREW:
            return {...state, crew: action.payload}
        default:
            return state
    }
}

export {reducerCrew}