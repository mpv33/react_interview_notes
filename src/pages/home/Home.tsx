import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full min-h-[82vh] flex flex-col justify-center items-center" style={{ marginTop: '60px' }}>
      <div className='w-[90%] px-4 text-center'>
        <h1 className="text-2xl md:text-6xl font-bold mb-4 text-gray-600">Interview Preparation Web App</h1>
        <p className="text-1xl md:text-2xl my-8 text-ellipsis custom-btn btn-2 btn-active">
          Your one-stop destination for acing your SDE interview
        
        </p>
        <div className="flex justify-center space-x-4">
          <button className="custom-btn btn-2">
            <Link to={'/dsa'}> Dsa Sheet </Link>  
          </button>
          <button className="custom-btn btn-2">
            <Link to={'/reactjs'}> ReactJs </Link>  
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
