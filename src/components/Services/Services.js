import React from 'react';
import useFatch from '../hooks/useFatch';
import Service from '../Our service/Service';

const Services = () => {
    let json = 'services.json'
    let { service } = useFatch(json);
    return (
        <div className="container py-5 my-3 mt-5 text-center" >
            <div className='mb-5 row'>
                <h1> Our Service </h1>
            </div>
            <div>
                <div className='row' >
                    {
                        service.map(services => <Service services={services} key={services._id} ></Service>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Services;