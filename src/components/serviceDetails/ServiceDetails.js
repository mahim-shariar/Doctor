import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    return (
        <div className='w-100' >
            <div className='mx-auto text-center card hover-outline w-50 '>
                <div className='card-body'>
                    <img src='https://cdn-icons-png.flaticon.com/512/2491/2491314.png' alt="service" className='mb-3 rounded-circle w-50 img-fluid' />
                    <h3>{serviceId}</h3>
                    <p>Ad eiusmod in qui laboris reprehenderit qui qui veniam. Cillum ipsum occaecat do laboris culpa nulla enim anim consequat incididunt occaecat. Est eu cupidatat est nisi dolore et proident dolor velit esse. Fugiat fugiat consequat dolor occaecat eiusmod ipsum nisi ex. Ex tempor est fugiat sunt labore veniam.</p>
                    <Link to='/home' className='btn btn-color' > Back to Home </Link>
                </div>
                
            </div>
        </div>
    );
};

export default ServiceDetails;