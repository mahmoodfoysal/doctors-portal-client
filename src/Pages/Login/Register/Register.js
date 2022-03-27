import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography, CircularProgress,Alert } from '@mui/material';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png'
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {user, registerUser, isLoading} = useAuth()
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value)
        const newLoginData = {...loginData};
        newLoginData[field] =value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        if(loginData.password !== loginData.password2) {
            alert("Password didn't Matched");
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
    }
    return (
        <Container>
        <Grid container spacing={2}>
            <Grid sx={{mt:8}} item xs={12} sm={6} md={6}>
            <Typography variant="body1" gutterBottom>
                Register
            </Typography>
                {!isLoading && <form onSubmit={handleLoginSubmit}>
                <TextField 
                sx={{width: '75%', m:1}}
                id="standard-basic" 
                label="Your Email" 
                name="email"
                type="email"
                onBlur={handleOnBlur}
                variant="standard" />
                <TextField 
                sx={{width: '75%', m:1}}
                id="standard-basic" 
                label="Your Name" 
                name="name"
                type="text"
                onBlur={handleOnBlur}
                variant="standard" />
                <TextField 
                sx={{width: '75%', m:1}}
                id="standard-basic" 
                label="Your Password" 
                onBlur={handleOnBlur}
                name="password"
                type="password"
                variant="standard" />
                <TextField 
                sx={{width: '75%', m:1}}
                id="standard-basic" 
                label="Re-type Your Password" 
                onBlur={handleOnBlur}
                name="password2"
                type="password"
                variant="standard" />
                <NavLink style={{textDecoration: 'none'}} to="/login">
                    <Button variant="text">Already Registered? Please Login</Button>
                </NavLink>
                <Button sx={{width:"75%", m: 1}} type="submit" variant='contained'>Register</Button>
                </form>}

                {isLoading &&  <CircularProgress />}
                {user?.email && <Alert severity="success">User Create successfully</Alert>}
            
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <img style={{width:'100%'}} src={login} alt="" />
            </Grid>


        </Grid>
    </Container>
    );
};

export default Register;