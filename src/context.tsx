import React from 'react';

// The default application state interface.
export interface AppState {
    count: number;
    updateState?: (newState: Partial<AppState>) => void
}

// Setting the default values of the application state
const defaultState: AppState = {
    count:0
}

// Exporting the Application Context
export const AppContext = React.createContext<AppState>(defaultState)