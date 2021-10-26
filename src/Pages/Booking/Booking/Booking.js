import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceID} = useParams()
    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`https://lit-anchorage-66977.herokuapp.com/services/${serviceID}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div className="text-center">
            <h2>Details of {service.name}</h2>
            <h2>This is booking: {serviceID}</h2>
        </div>
    );
};

export default Booking;