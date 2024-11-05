import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';

const About = () => {
    return (
        <>
            <Typography variant="h4" align="center" gutterBottom>About</Typography>
            <Box display="flex" justifyContent="center" gap={2} mt={5}>
                <Button variant="contained" color="primary" component={Link} to="">
                    Nested
                </Button>
                <Button variant="contained" color="primary" component={Link} to="nested1">
                    Nested1
                </Button>
                <Button variant="contained" color="primary" component={Link} to="nested2">
                    Nested2
                </Button>
                <Button variant="contained" color="primary" component={Link} to="nested3">
                    Nested3
                </Button>
            </Box>
            <Outlet />
        </>
    );
};

export default About;
