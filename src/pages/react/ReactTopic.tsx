import React, { useState } from 'react'
import { reactTopic } from '../../contants/staticData/allTopic'

function ReactTopic() {
    const [topic, setTopic] = useState(reactTopic)
    return (
        <div className='w-full flex justify-center items-center px-4' style={{ marginTop: '40px' }}>
            <div className='w-full md:w-[40%] my-6'>
                {
                    topic?.map((item: any, i: any) => (
                        <div key={i}>
                            <p className='text-start md:text-center text-1xl md:text-2xl font-bold mt-3'> {item?.topic}</p>
                            <div className='my-2'>
                                {
                                    item?.questions?.map((q: any, index: any) => (
                                        <p key={index}>
                                            <span>{index + 1}.</span>
                                            <span className='pl-2'>{q} </span>
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ReactTopic
