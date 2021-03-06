import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import appointment from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${appointment})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175 
}

const AppointmentBanner = () => {
    return (
<Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img style={{width: 400, marginTop:'-120px'}} src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{
         display:'flex',
         justifyContent: 'flex-start',
         textAlign:'left',
         alignItems: 'center'
         }}>
       <Box>
       <Typography variant='h6' sx={{mb:5}} style={{color: '#5CE7ED'}}>
            Appointment
        </Typography>
        <Typography variant='h4' style={{color:'white'}}>
            Make and Appointment Today
        </Typography>
        <Typography variant='h6' sx={{my: 5}} style={{color:'white', fontSize: 14, fontWeight: 300}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quo maxime aliquid in corrupti nisi et id hic est blanditiis?
        </Typography>
        <Button variant="contained" style={{backgroundColor: '#5CE7ED'}}>Learn More</Button>
       </Box>
        </Grid>

      </Grid>
    </Box>
    );
};

export default AppointmentBanner;