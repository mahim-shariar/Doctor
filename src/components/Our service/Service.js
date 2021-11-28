import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = (props) => {
    
    let { name, picture, balance,about } = props.services;
    const url = `/servicedetails/${name}`
    return (
        <div className='mb-4 col-lg-4 col-md-6' >
            <div className='card hover-outline'>
                <div className='card-body'>
                    <img src={picture} alt="service" className='mb-3 rounded-circle w-50 img-fluid' />
                    <h3>{name}</h3>
                    <h5>{balance}</h5>
                    <p>{about.slice(0,50)}</p>
                    <Link to={url} className='btn btn-color' > Details </Link>
                </div>
            </div>
        </div>

    );
};

export default Service;