import React from "react"
import { AppContext } from "./context"

interface Props {
    children: React.ReactNode
}

export const ContextProvider: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
    
    return (
        <AppContext.Provider value={{count:142}}>
            {props.children}
        </AppContext.Provider>
    )
}