interface IMapState {
    lat: number,
    lng: number,
}

interface IMapAction {
    type: string,
    payload: number
}

export {IMapState, IMapAction}