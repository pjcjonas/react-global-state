import React from "react"

export interface AppState {
    count: number;
}

const initialState: AppState = {
    count:0
}

export const AppContext = React.createContext(initialState)