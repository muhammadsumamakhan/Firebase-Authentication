// Register.js
import React, { useRef, useState } from 'react';
import { Box, Button, TextField, Typography, Container, Alert } from '@mui/material';
import { auth } from '../config/firebase/firebaseconfig';
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const registerUser = (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    // Basic form validation
    if (password.current.value !== confirmPassword.current.value) {
      setError("Passwords do not match");
      return;
    }
    if (!email.current.value.includes('@')) {
      setError("Please enter a valid email address");
      return;
    }
    if (password.current.value.length < 6) {
      setError("Password should be at least 6 characters long");
      return;
    }

    // Create user with Firebase Authentication
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User registered successfully:", user); // Log user details
        setSuccess("Registration successful! You can now log in.");
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error registering user:", error.message);
      });
  };

  return (
    <form onSubmit={registerUser}>
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
            Register
          </Typography>
          {error && <Alert severity="error" sx={{ width: '100%' }}>{error}</Alert>}
          {success && <Alert severity="success" sx={{ width: '100%' }}>{success}</Alert>}
          <TextField label="Email" type="email" variant="outlined" fullWidth margin="dense" inputRef={email} required />
          <TextField label="Password" type="password" variant="outlined" fullWidth margin="dense" inputRef={password} required />
          <TextField label="Confirm Password" type="password" variant="outlined" fullWidth margin="dense" inputRef={confirmPassword} required />
          <Button type="submit" variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
            Register
          </Button>
        </Box>
      </Container>
    </form>
  );
};

export default Register;
