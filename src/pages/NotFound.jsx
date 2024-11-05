import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Box } from '@mui/material';

function NotFound() {
    const navigate = useNavigate();

    return (
        <Box textAlign="center" mt={8}>
            <Typography variant="h1" component="h1" gutterBottom>
                404
            </Typography>
            <Typography variant="h6" gutterBottom>
                Oops! The page you're looking for does not exist.
            </Typography>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={() => navigate('/')}
                sx={{ mt: 2 }}
            >
                Go to Homepage
            </Button>
        </Box>
    );
}

export default NotFound;
