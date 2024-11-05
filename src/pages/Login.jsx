import React, { useRef, useState } from 'react';
import { Box, Button, TextField, Typography, Container, Alert } from '@mui/material';
import { auth } from '../config/firebase/firebaseconfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const loginUser = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        console.log("User logged in successfully:", userCredential.user);
        navigate('/products');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error("Error logging in user:", errorMessage);
        setError(errorMessage);
      });
  };

  return (
    <form onSubmit={loginUser}>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 2,
            mt: 4,
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: 'white',
          }}
        >
          <Typography variant="h4" gutterBottom color="primary" fontWeight="bold">
            Login
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField label="Email" type="email" variant="outlined" fullWidth margin="dense" inputRef={email} required />
          <TextField label="Password" type="password" variant="outlined" fullWidth margin="dense" inputRef={password} required />
          <Button type="submit" variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
            Login
          </Button>
        </Box>
      </Container>
    </form>
  );
};

export default Login;
