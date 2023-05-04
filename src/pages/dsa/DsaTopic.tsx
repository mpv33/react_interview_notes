import React, { useState } from 'react'
import { dsaTopic } from '../../contants/staticData/allTopic'
import Sidebar from '../../components/SideBar';
import TopicDetails from '../../components/TopicDetials';


function DsaTopic() {
    const [topic, setTopic] = useState(dsaTopic)

    return (
        <div>
            <Sidebar
                topics={topic}
                defaultTopicIndex={0}
                category='dsa'
                renderTopicContent={(activeTopic: any) => <TopicDetails activeTopic={activeTopic} />}
            />
        </div>
    )
}

export default DsaTopic;
