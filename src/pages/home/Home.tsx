import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full min-h-[82vh] flex flex-col justify-center items-center" style={{ marginTop: '60px' }}>
      <div className='w-[90%] px-4 text-center card active'>
        <h1 className="text-2xl md:text-6xl font-bold my-4 text-gray-600">Interview Preparation Web App</h1>
        <p className="text-1xl md:text-2xl mb-8 text-ellipsis">
          Your one-stop destination for acing your SDE interview
        </p>
      </div>
      <div className="flex justify-center space-x-4 mt-8">
          <button className="card neumorphism">
            <Link to={'/dsa'}> Dsa Sheet </Link>
          </button>
          <button className="card neumorphism">
            <Link to={'/reactjs'}> ReactJs </Link>
          </button>
        </div>
    </div>
  );
};

export default Home;
