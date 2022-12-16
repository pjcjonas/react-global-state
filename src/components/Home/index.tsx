import React from 'react'
import { Box, Typography } from '@mui/material'


const Home: React.FunctionComponent = ():JSX.Element => {
    return <React.Fragment>
        <Box paddingTop={2}>
            <Typography component="h1" variant="h4">
            Welcome to a demo of React Global State
            </Typography>
        </Box>
    </React.Fragment>
}

export default Home 