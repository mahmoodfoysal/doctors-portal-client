import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Button, Container} from '@mui/material';


const bannerBg = {
    background: `url(${bg})`,
    height: 450
}
const verticalCenter = {
    display:'flex',
    alignItems:'center',
    height: 400
    
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid style={{...verticalCenter ,textAlign: 'left'}} item xs={12} md={6}>

           <Box>
           <Typography variant="h3">
                your new smile <br />
                starts Here
           </Typography>
           <Typography variant="h6" sx={{my:3, fontSize:13, fontWeight:300, color: 'gray'}}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis exercitationem at ullam culpa molestiae reprehenderit vero quis quod quidem rem!
           </Typography>
           <Button variant="contained" style={{backgroundColor: '#5CE7ED'}}>Get Appointment</Button>
           </Box>
          </Grid>
          <Grid item xs={12} md={6} style={verticalCenter}>
            <img style={{width: '350px'}} src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Banner;