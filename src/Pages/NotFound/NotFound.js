import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png'

const NotFound = () => {
    return (
        <div className='container mb-3'>
            <img className='img-fluid mt-2' src={notFound} alt="" />
            <Link to='/'>
            <button className='btn btn-primary mt-2'>Go Back</button>
            </Link>
            
        </div>
    );
};

export default NotFound;