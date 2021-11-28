import React from 'react';

const TopDoctors = () => {
    return (
        <div className='row'>
            <div className='my-5'>
                <h1> Top Doctor </h1>
            </div>
            <div className='mb-4 col-lg-4 col-md-6' >
                <div className='card hover-outline'>
                    <div className='card-body'>
                        <img src='http://st.ourhtmldemo.com/template/meditex-final/assets/image/best-doctors/best-doctors1.jpg' alt="doctor" className='mb-3 rounded-circle w-50 img-fluid' />
                        <h3>Nieves Ramirez</h3>
                        <p> Email: nievesramirez@squish.com</p>
                        <h5> Age: 22 </h5>
                        <h6>$2,178.71</h6>
                        <p>Pariatur ad dolor sunt qui dolore. Exercitation excepteur cupidatat adipisicing excepteur fugiat eu quis consequat eiusmod labore veniam culpa.</p>
                        <button className='btn btn-color' > Details </button>
                    </div>
                </div>

            </div>
            <div className='mb-4 col-lg-4 col-md-6' >
                <div className='card hover-outline'>
                    <div className='card-body'>
                        <img src='http://st.ourhtmldemo.com/template/meditex-final/assets/image/best-doctors/best-doctors2.jpg' alt="Doctor" className='mb-3 rounded-circle w-50 img-fluid' />
                        <h3>Dominguez Trujillo</h3>
                        <p> Email: domingueztrujillo@squish.com</p>
                        <h5> Age: 26 </h5>
                        <h6>$2,178.71</h6>
                        <p>Laboris minim reprehenderit labore qui exercitation proident ipsum aute amet sint in tempor fugiat. Aute cupidatat dolore esse sint esse ea quis.</p>
                        <button className='btn btn-color' > Details </button>
                    </div>
                </div>

            </div>
            <div className='mb-4 col-lg-4 col-md-6' >
                <div className='card hover-outline'>
                    <div className='card-body'>
                        <img src='http://st.ourhtmldemo.com/template/meditex-final/assets/image/best-doctors/best-doctors3.jpg' alt="service" className='mb-3 rounded-circle w-50 img-fluid' />
                        <h3>Nieves Ramirez</h3>
                        <p> Email: nievesramirez@squish.com</p>
                        <h5> Age: 22 </h5>
                        <h6>$2,178.71</h6>
                        <p>Velit adipisicing exercitation commodo ea est in eu consequat. Id sit est irure exercitation laborum est consequat esse cillum culpa.</p>
                        <button className='btn btn-color' > Details </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopDoctors;