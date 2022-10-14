import { ICrewState } from "./crew/interface"
import { IMapState } from "./map/interface"
import { ITimeState } from "./time/interface"

interface IRootState {
    map?: IMapState,
    time?: ITimeState,
    crew?: ICrewState
}

export {IRootState}