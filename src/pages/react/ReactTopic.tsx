import React, { useState } from 'react'
import { reactTopic } from '../../contants/staticData/allTopic'
import Sidebar from '../../components/SideBar'
import TopicDetails from '../../components/TopicDetials'

function ReactTopic() {
    const [topic, setTopic] = useState(reactTopic)
    return (
        <div>
        <Sidebar
            topics={topic}
            defaultTopicIndex={0}
            category='reactjs'
            renderTopicContent={(activeTopic: any) => <TopicDetails activeTopic={activeTopic} />}
        />
    </div>
    )
}

export default ReactTopic
