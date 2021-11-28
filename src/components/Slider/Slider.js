import React from 'react';
import { Link } from 'react-router-dom';
import './Slider.css'


const Slider = () => {
    return (
        <div className="container" >
            <div className='banner-responsiv '>
                <div className='container text-container ' >
                    <h1> We Believe <br />
                        <span className='text-color' >The Heart Of Healthcare</span> <br />
                        To Others </h1>
                    <p>You can focus on your practice and your business. </p>
                    <div>
                        <Link to='ourDoctor' className=' btn btn-outline-success btn-res' > Appointment </Link>

                    </div>
                </div>

                <img src="https://i.pinimg.com/originals/61/c7/a2/61c7a28bbb12ee7d75064e9dba23305e.png" alt="dr" className='img-container border-rounded' />

            </div>
        </div>
    );
};
export default Slider;