import * as React from 'react';
import { Grid } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';



const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Grid container spacing={2}>
            <Grid item xs={8} md={6}>
                <Calender
                    date={date}
                    setDate={setDate}
                ></Calender>
             </Grid>
            <Grid item xs={4} md={6}>
                <Appointments
                    date ={date}
                ></Appointments>
            </Grid>
  
</Grid>
    );
};

export default DashboardHome;