import React from 'react';

interface TopicDetailsProps {
    activeTopic: {
        topic: string;
        questions: any[];
      };
}

function TopicDetails({activeTopic}: TopicDetailsProps) {
    return (
        <div className="w-full flex justify-center items-center mx-4 px-4 pt-5" style={{ marginTop: '0px' }}>
            <div className="w-full md:w-[80%] mt-1 md:my-4 custom-btn btn-2 btn-active">
                <p className="text-start md:text-center text-1xl md:text-2xl font-bold mt-2 uppercase text-gray-800">{activeTopic.topic}</p>
                <div className="my-2 text-gray-500">
                    {activeTopic.questions?.map((q, index) => (
                        <p key={index}>
                            <span>{index + 1}.</span>
                            <span className="pl-2">{q} </span>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TopicDetails;
