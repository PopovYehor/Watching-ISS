import {combineReducers, createStore} from "redux";
import { reducerCrew } from "../modules/crew/reducer";
import { reducerMap } from "../modules/map/reducer";
import { reducerTime } from "../modules/time/reducer";


const allReducer = combineReducers({
    map: reducerMap,
    time: reducerTime,
    crew: reducerCrew
})

const store = createStore(allReducer)

export default store;