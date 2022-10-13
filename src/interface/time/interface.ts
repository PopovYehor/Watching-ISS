interface ITimeState{
    time: string,
    date: string
}

interface ITimeAction {
    type: string,
    payload: string
}

export {ITimeState, ITimeAction}