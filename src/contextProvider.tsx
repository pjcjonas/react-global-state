import React, { useState } from 'react';
import { AppContext, AppState } from "./context"

interface Props {
    children: React.ReactNode
}

export const ContextProvider: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
    // Using react hooks, set the default state
    const [state, setState] = useState<AppState>({count:0});

    // Declare the update state method that will handle the state values
    const updateState = (newState: Partial<AppState>) => {
        setState({ ...state, ...newState });
    };

    return (
        // Context wrapper that will provider the state values to all its children nodes
        <AppContext.Provider value={{...state, updateState}}>
            {props.children}
        </AppContext.Provider>
    )
}