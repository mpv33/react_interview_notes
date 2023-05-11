
import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai';

interface Topic {
  topic: string;
  questions: any[];
}

interface SidebarProps {
  topics: Topic[];
  defaultTopicIndex?: number;
  category: string
  renderTopicContent: (topic: Topic) => React.ReactNode;
}

function Sidebar(props: SidebarProps) {
  const { topics, defaultTopicIndex = 0, renderTopicContent, category } = props;
  const [activeTopicIndex, setActiveTopicIndex] = useState(defaultTopicIndex);
  const navigate = useNavigate()
  const path = useLocation().pathname


  const handleTopic = (item: Topic, i: number) => {
    setActiveTopicIndex(i)
    navigate(`/${item?.topic.toLowerCase().split(' ').join('-')}`);
  }

  return (
    <div className='block md:flex' style={{ marginTop: '60px' }}>
      <div className='w-[20%] hidden md:block pt-2'>
        {
          topics.map((item: Topic, i: number) => (
            <div key={i} className='w-full'>
              <Link to={`${item?.topic.toLowerCase().split(' ').join('-')}`}>
                <div
                  onClick={() => {
                    handleTopic(item, i)
                  }
                  }
                  className={`py-2 px-4 w-full m-4 card hidden md:block neumorphism cursor-pointer ${i === activeTopicIndex ? 'active' : 'neumorphism'}`}
                >
                    {item?.topic}
                </div>
              </Link>
            </div>
          ))
        }
      </div>
      <div className='w-[90%] flex md:hidden gap-4 mx-4 px-4 pt-8 pb-2 text-blue-500  uppercase' >
        <Link to={`/`}>
          <AiOutlineHome size={18} />
        </Link>
        {
          `/${category}` == path &&
            <p className='text-gray-600'> {category} </p>
        }
        {
          `/${category}` !== path &&
          <Link to={`/${category}`}>
            <p className=''> {category} </p>
          </Link>
        }
      </div>
      {
        `/${category}` === path &&
        <div className='w-[90%] block md:hidden mx-4 min-h-[70vh] mt-3'>
          {
            topics.map((item: Topic, i: number) => (
              <div key={i} className='w-full'>
                <Link to={`${item?.topic.toLowerCase().split(' ').join('-')}`}>
                  <div
                    onClick={() => {
                      handleTopic(item, i)
                    }
                    }
                    className='py-2 px-4 w-full text-blue-500 rounded-sm cursor-pointer text-start'
                  >
                    {item?.topic}

                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      }
      <div className='w-[70%] hidden md:block min-h-[82vh]'>
        {renderTopicContent(topics[activeTopicIndex])}
      </div>
      {
        `/${category}` !== path &&
        <div className='w-[90%] block md:hidden min-h-[72vh]'>
          {renderTopicContent(topics[activeTopicIndex])}
        </div>
      }

    </div>
  )
}

export default Sidebar;
