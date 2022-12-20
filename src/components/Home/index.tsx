import React from 'react'
import { Box, Button, Typography } from '@mui/material'

// Import the Application context.
import { AppContext } from '../../context'


const Home: React.FunctionComponent = ():JSX.Element => {

    // Declare the context and indicate which context to use in this component.
    const appContext = React.useContext(AppContext)

    // Create a increment function to handle the 
    const incrementCount = () => {
        if (appContext.updateState) {
            const newValue = appContext.count + 1;
            appContext.updateState({count: newValue})
        } else {
            console.error("appContext.updateState is not set")
        }
    }

    return <React.Fragment>
        <Box paddingTop={2}>
            <Typography component="h1" variant="h4">
                {/* To make use of the context, reference it using "appContext.count" */}
                Welcome to a demo of React Global State, {appContext.count}
            </Typography>

            {/* This button updates the count value for testing to see if the global state works */}
            <Button variant="contained" onClick={incrementCount}>INCREMENT</Button>
        </Box>
    </React.Fragment>
}

export default Home 