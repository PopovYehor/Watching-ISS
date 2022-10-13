interface ICrewState{
    crew: []
}

interface ICrewAction {
    type: string,
    payload: string
}

interface ICrewArray{
    name: string,
    craft: string
}

export {ICrewState, ICrewAction, ICrewArray}