import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PyramidLoader from '../../components/PyramidLoader';

const Home = () => {
  return (
    <div className="w-full min-h-[80vh] flex flex-col justify-center items-center" style={{ marginTop: '60px' }}>
      <div className='w-[90%] px-4 text-center card active'>
        <div className="text-2xl md:text-6xl font-bold my-4 text-gray-600 hidden md:flex gap-8 items-center">
          <PyramidLoader />
          <div> Interview Preparation App  </div>
          <PyramidLoader />
        </div>
        <div className="text-2xl md:text-6xl font-bold my-4 text-gray-600 block  md:hidden">
          <p> Interview Preparation App  </p>
        </div>

        <p className="text-1xl md:text-2xl mb-4 text-ellipsis text-gray-800">
          Your one-stop destination for acing your SDE interview
        </p>

        <p className="text-sm md:text-1xl mb-8 text-ellipsis text-justify text-gray-600">
          Welcome to our SDE interview preparation web app! Our app covers
          a wide range of technical topics that are frequently asked in software development job
          interviews, including Data Structures and Algorithms (DSA), ReactJS, and JavaScript.
          Our short-hand notes are designed to provide a comprehensive overview of these topics,
          helping you to feel confident and prepared for your next SDE interview. Whether you need
          a quick refresher or a comprehensive review, our app has got you covered. Try it out today
          and take the first step towards landing your dream job!
        </p>
        <PyramidLoader />
      </div>

      <div className="flex md:hidden justify-center space-x-4 mt-8">
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
