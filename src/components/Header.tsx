import React, { useState,useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { nav } from '../contants/staticData/allTopic'

function Header() {
    const [navLust, setNavList] = useState(nav)
    const [active, setActive] = useState('')
    const path=useLocation().pathname

    useEffect(()=>{
          if(path==='/'){
              setActive('')
          }
          else if(path==='/dsa'){
              setActive('DSA')
          }
          else if(path==='/javascript'){
            setActive('JavaScript')
        }
        else if(path==='/reactjs'){
            setActive('ReactJs')
        }
    },[path])

    return (
        <div className=''>
            <nav className="flex flex-wrap md:flex-nowrap justify-between p-4 bg-gray-200 fixed top-0 left-0 right-0 z-10">
                <Link to={'/'}>
                    <h1 className="text-2xl font-bold">SDE Interview</h1>
                </Link>
                <button
                    className="flex md:hidden items-center"
                    onClick={() => document.getElementById('nav-list')?.classList.toggle('hidden')}
                >
                    <svg
                        className="h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path
                            className="heroicon-ui"
                            d="M4 6h16M4 12h16M4 18h16"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <ul
                    id="nav-list"
                    className="flex-col md:flex-row md:flex justify-center md:justify-between items-center md:items-start w-full md:w-auto hidden"
                >
                    {navLust.map((topic: any, index: any) => (
                        <li key={index}>
                            <Link
                                to={`/${topic.name.toLowerCase()}`}
                                className="block mt-4 md:mt-0 md:ml-4 hover:text-blue-500 text-center"
                                onClick={() =>{
                                    document.getElementById('nav-list')?.classList.toggle('hidden')
                                    setActive(topic.name)
                                }
                                }
                            >
                                {
                                    active === topic.name ?
                                        <p className='text-blue-600'>
                                            {topic.name}
                                        </p>
                                        :
                                        <p className='text-gray-500 hover:text-blue-600'>

                                            {topic.name} </p>
                                }
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Header
