interface ICrewState{
    crew: []
}

interface ICrewArray{
    name: string,
    craft: string
}

interface ICrewPeople{
    people: ICrewArray[],
    
}

interface ICrewItem{
    count: number,
}

interface ICrewAction {
    type: string,
    payload: ICrewArray[]
}

export {ICrewState, ICrewAction, ICrewArray, ICrewItem, ICrewPeople}