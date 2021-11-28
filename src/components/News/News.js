import React from 'react';

const News = (props) => {
    let { balance, picture, name, registered, company, about } = props.blogs;
    return (

        <div className='mb-4 col-lg-4 col-md-6' >
            <div className='card hover-outline'>
                <div className='card-body'>
                    <img src={picture} alt="service" className='mb-3 rounded-circle w-50 img-fluid' />
                    <h2> {company} </h2>
                    <h3>{name}</h3>
                    <h6>{balance}</h6>
                    <p>{about.slice(0, 50)}</p>
                    <button className='btn btn-color' > Details </button>
                </div>
                <div className='footar'>
                    <p> {registered} </p>
                </div>
            </div>
        </div>


    );
};

export default News;