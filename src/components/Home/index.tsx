import React from 'react'
import { Box, Typography } from '@mui/material'
import { AppContext } from '../../context'


const Home: React.FunctionComponent = ():JSX.Element => {
    const appContext = React.useContext(AppContext)
    return <React.Fragment>
        <Box paddingTop={2}>
            <Typography component="h1" variant="h4">
            Welcome to a demo of React Global State, {appContext.count}
            </Typography>
        </Box>
    </React.Fragment>
}

export default Home 