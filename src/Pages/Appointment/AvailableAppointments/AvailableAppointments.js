import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography, Alert } from '@mui/material';
import Booking from '../Booing/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 Am - 09.00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 Am - 10.00 AM',
        space: 8
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 Am - 11.00 AM',
        space: 9
    },
    {
        id: 4,
        name: 'Teeth Orthodonics',
        time: '11.00 Am - 12.00 Pm',
        space: 10
    },
    {
        id: 5,
        name: 'Teeth Orthodonics',
        time: '12.00 Pm - 01.00 PM',
        space: 10
    },
    {
        id: 6,
        name: 'Teeth Orthodonics',
        time: '01.00 Pm - 02.00 PM',
        space: 10
    },
]

const AvailableAppointments = ({date, setDate}) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <Container>
            <Typography variant='h4' sx={{ color: 'info.main', mb:3 }}>Available Appointments{date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Booking Successfully</Alert>}
            <Grid container spacing={2}>
            {
                bookings.map(booking=> <Booking
                key={booking.id}
                booking={booking}
                date={date}
                setBookingSuccess={setBookingSuccess}
                ></Booking>)
            }

            </Grid>
        </Container>
    );
};

export default AvailableAppointments;