import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci mollitia perferendis similique harum corporis quibusdam deleniti optio repellendus dignissimos nemo et repudiandae fugiat quam, sint quidem error, assumenda, dolore quasi.',
        img: fluoride
    },
    {
        name: 'Cavitry Filling',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci mollitia perferendis similique harum corporis quibusdam deleniti optio repellendus dignissimos nemo et repudiandae fugiat quam, sint quidem error, assumenda, dolore quasi.',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci mollitia perferendis similique harum corporis quibusdam deleniti optio repellendus dignissimos nemo et repudiandae fugiat quam, sint quidem error, assumenda, dolore quasi.',
        img: whitening
    },
]

const Services = () => {
    return (
<Box sx={{ flexGrow: 1 }}>
      <Container>
      <Typography sx={{fontWeight: 500,  m: 2, color:'success.main'}} variant="h6" component="div">
          Our Services
        </Typography>
      <Typography sx={{fontWeight: 600, m:5 }} variant="h4" component="div">
          Services We Provide
        </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            services.map(service => <Service
            key = {service.name}
            service = {service}
            ></Service>)
        }
      </Grid>
      </Container>
    </Box>
    );
};

export default Services;