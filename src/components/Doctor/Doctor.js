import React from 'react';

const Doctor = (props) => {
    let { name,price,about,age,image,email } = props.services;
    return (
        <div className='mb-4 col-lg-4 col-md-6' >
            <div className='card hover-outline'>
                <div className='card-body'>
                    <img src={image} alt="service" className='mb-3 rounded-circle w-50 img-fluid' />
                    <h3>{name}</h3>
                    <p> Email: {email}</p>
                    <h5> Age:{age} </h5>
                    <h6>{price}</h6>
                    <p>{about.slice(0,50)}</p>
                    <button className='btn btn-color' > Details </button>
                </div>
            </div>
        </div>
    );
};

export default Doctor;