import { Box, Typography } from '@mui/material'
import React from 'react'

const Admin: React.FunctionComponent = ():JSX.Element => {
    return <React.Fragment>
        <Box paddingTop={2}>
            <Typography component="h1" variant="h4">
                Admin Page
            </Typography>
            <Box paddingTop={2}>
                <Typography component="p">
                    Admin page, this should only be visible once logged in
                </Typography>
            </Box>
        </Box>
    </React.Fragment>
}

export default Admin