import React from 'react';
import Doctor from '../Doctor/Doctor';
import useFatch from '../hooks/useFatch';

const Doctors = () => {
    let jsonDr = 'doctorsbig.json'
    let {service} = useFatch(jsonDr);
    return (
        <div className="container py-5 my-3 mt-5 text-center" >
            <div className='mb-5 row'>
                <h1> Top Doctor </h1>
            </div>
            <div>
                <div className='row' >
                    {
                        service.map(services => <Doctor services={services} key={services._id} ></Doctor>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctors;