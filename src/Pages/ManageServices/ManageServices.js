import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://lit-anchorage-66977.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDelete = (_id) => {
        axios.delete(`https://lit-anchorage-66977.herokuapp.com/services/${_id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.deletedCount) {
                    alert('Deleted Successfully')
                    const remainingServices = services.filter(service => service._id !== _id)
                    setServices(remainingServices)
                }
            })
    }
    return (
        <div className="text-center">
            <h2>Manage Services</h2>
            {
                services.map((service) => <div className='mb-2' key={service._id}>
                    <h5 className="d-inline me-3">{service.name}</h5>
                    <button onClick={() => handleDelete(service._id)} className='btn btn-primary'>Delete</button>
                </div>)
            }

        </div>
    );
};

export default ManageServices;