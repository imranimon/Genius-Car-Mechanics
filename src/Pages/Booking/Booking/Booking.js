import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceID} = useParams()
    return (
        <div>
            <h2>This is booking: {serviceID}</h2>
        </div>
    );
};

export default Booking;