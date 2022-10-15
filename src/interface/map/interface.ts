interface IMapState {
    lat: number,
    lng: number,
}

interface IMapAction {
    type: string,
    payload: number
}

interface IPosition{
    longitude: string,
    latitude: string
}

interface IISSPosition{
    iss_position: IPosition
}

export {IMapState, IMapAction, IISSPosition, IPosition}