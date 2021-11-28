import React from 'react';
import useFatch from '../hooks/useFatch';
import News from '../News/News';
const TopNews = () => {
    let { service } = useFatch('blogs.json');
    return (
        <div className='container py-5 my-3 mt-5 text-center' >
            <div className='row' >
                <h1 className='my-5' > Top News  </h1>
                {
                    service.map(blog => <News blogs={blog} key={blog._id} ></News>)
                }
            </div>
        </div>
    );
};

export default TopNews;