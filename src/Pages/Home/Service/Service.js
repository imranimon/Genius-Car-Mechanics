import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Serice.css'

const Service = (props) => {
    const { id, name, description, price, img, time } = props.service;
    return (
        <div className='col-lg-4 col-md-6 col-12'>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>Price: {price}</p>
                        <p>Time needed: {time}hr</p>
                        {description}
                    </Card.Text>
                    <Link to={`booking/${id}`}>
                        <Button variant="primary">
                            Book "{name}"
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;