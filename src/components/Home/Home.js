import React from 'react';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import TopDoctors from '../top doctor/TopDoctors';


const Home = () => {
    return (
        <div>
            <div>
                <Slider></Slider>
            </div>
            <div>
                <Services></Services>
            </div>
            <div className='container py-5 my-3 mt-5 text-center' >
                <TopDoctors></TopDoctors>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;