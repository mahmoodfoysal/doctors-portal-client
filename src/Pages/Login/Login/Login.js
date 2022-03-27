import { Button, Container, Grid, TextField, Typography,Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png'
import useAuth from '../../../hooks/useAuth'
import { useLocation, useHistory } from 'react-router-dom';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoading, signInWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value)
        const newLoginData = {...loginData};
        newLoginData[field] =value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history)
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{mt:8}} item xs={12} sm={6} md={6}>
                <Typography variant="body1" gutterBottom>
                    Login
                </Typography>
                    <form onSubmit={handleLoginSubmit}>
                    <TextField 
                    sx={{width: '75%', m:1}}
                    id="standard-basic" 
                    label="Your Email" 
                    name="email"
                    onChange={handleOnChange}
                    variant="standard" />
                    <TextField 
                    sx={{width: '75%', m:1}}
                    id="standard-basic" 
                    label="Your Password" 
                    onChange={handleOnChange}
                    name="password"
                    type="password"
                    variant="standard" />
                    <NavLink style={{textDecoration: 'none'}} to="/register">
                        <Button variant="text">New User? Please Registration</Button>
                    </NavLink>
                    <Button sx={{width:"75%", m: 1}} type="submit" variant='contained'>Login</Button>
                    {user?.email && <Alert severity="success">Login successfully</Alert>}
                    </form>
                    <p>----------------------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant='contained'>Google Sign In</Button>
                
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <img style={{width:'100%'}} src={login} alt="" />
                </Grid>


            </Grid>
        </Container>
    );
};

export default Login;