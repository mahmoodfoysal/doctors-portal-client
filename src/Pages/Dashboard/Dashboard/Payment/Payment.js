import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

const Payment = () => {
    const {appointmentId} = useParams()
    const [appointment, setAppointment] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
        .then(res => res.json())
        .then(data => setAppointment(data))
    }, [appointmentId])
    return (
        <div>
            <h2>Payment for: {appointment.patientName} for {appointment.serviceName}</h2>
            <h4>$ {appointment.price}</h4>
        </div>
    );
};

export default Payment;