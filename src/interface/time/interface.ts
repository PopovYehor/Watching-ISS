interface ITimeState{
    time: string,
    date: string,
    updateTime?: number
}

interface ITimeAction {
    type: string,
    payload: string
}

interface ITimeStamp{
    timestamp: number
}

export {ITimeState, ITimeAction, ITimeStamp}