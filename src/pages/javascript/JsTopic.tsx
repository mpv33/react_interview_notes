import React, { useState } from 'react'
import { jsTopic } from '../../contants/staticData/allTopic'
import Sidebar from '../../components/SideBar'
import TopicDetails from '../../components/TopicDetials'

function JsTopic() {
    const [topic, setTopic] = useState(jsTopic)
    return (
        <div>
        <Sidebar
            topics={topic}
            defaultTopicIndex={0}
            category='javascript'
            renderTopicContent={(activeTopic: any) => <TopicDetails activeTopic={activeTopic} />}
        />
    </div>
    )
}

export default JsTopic
