interface ICrewState{
    crew: []
}

interface ICrewAction {
    type: string,
    payload: []
}

interface ICrewArray{
    name: string,
    craft: string
}

interface ICrewItem{
    name?: string,
    count?: number,
}

export {ICrewState, ICrewAction, ICrewArray, ICrewItem}