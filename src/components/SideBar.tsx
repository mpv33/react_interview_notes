
import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

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
      <div className='w-[20%] hidden md:block fixed bg-gray-200 h-screen pt-2'>
        {
          topics.map((item: Topic, i: number) => (
            <div key={i} className='w-full'>
              <Link to={`${item?.topic.toLowerCase().split(' ').join('-')}`}>
                <div
                  onClick={() => {
                    handleTopic(item, i)
                  }
                  }
                  className={`py-2 px-4 w-full text-gray-500 rounded-sm hover:text-blue-600 hover:bg-gray-300 cursor-pointer ${i === activeTopicIndex ? 'bg-gray-300 text-blue-600' : ''}`}
                >
                  {item?.topic}

                </div>
              </Link>
            </div>
          ))
        }
      </div>
      <div className='w-[90%] flex md:hidden gap-4 mx-4 px-4 py-4 text-blue-500 underline uppercase' >
            <Link to={`/`}>
              <p className=''> Home </p>
            </Link>
            <Link to={`/${category}`}>
              <p className=''> {category} </p>
            </Link>
          </div>
      {
        `/${category}` === path &&
        <div className='w-[90%] block md:hidden bg-gray-50 mx-4 min-h-[81vh]'>
          {
            topics.map((item: Topic, i: number) => (
              <div key={i} className='w-full'>
                <Link to={`${item?.topic.toLowerCase().split(' ').join('-')}`}>
                  <div
                    onClick={() => {
                      handleTopic(item, i)
                    }
                    }
                    className='py-2 px-4 w-full text-gray-500 rounded-sm cursor-pointer'
                  >
                    {item?.topic}

                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      }


      <div className='w-[70%] hidden md:block min-h-[86vh]'>
        {renderTopicContent(topics[activeTopicIndex])}
      </div>
      {
        `/${category}` !== path &&
        <div className='w-[90%] block md:hidden min-h-[81vh]'>
          {renderTopicContent(topics[activeTopicIndex])}
        </div>
      }

    </div>
  )
}

export default Sidebar;
