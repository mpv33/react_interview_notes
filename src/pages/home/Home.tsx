import React from 'react'
import { Link } from 'react-router-dom'
const b='https://www.omsaigroupconsultancy.com/blog/wp-content/uploads/2020/02/interview-preparation-1280x720.jpg'
const Home = () => {
    return (
        <div className="w-full min-h-[87vh] flex flex-col justify-center items-center" style={{ marginTop: '60px' }}>
            <div className='w-[90%] px-4 text-center'>
                {/* <div>
                    <img src={b} alt='banner' className='w-full h-[30vh]'/>
                </div> */}
                <h1 className="text-2xl md:text-6xl font-bold mb-4">Interview Preparation Web App</h1>
                <p className="text-1xl md:text-2xl mb-8 text-ellipsis">
                    Your one-stop destination for acing your SDE interview
                </p>
                <div className="flex justify-center space-x-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                     <Link to={'/dsa'}> SDE Sheet </Link>  
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                           <Link to={'/reactjs'}> ReactJs </Link>  
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Home;
