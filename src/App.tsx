import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Topic, allTopic } from './contants/staticData/allTopic';

function App() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  function handleTopicSelect(topic: Topic) {
    setSelectedTopic(topic);
    document.getElementById('nav-list')?.classList.toggle('hidden')
  }

  return (
    <BrowserRouter>
      <nav className="flex flex-wrap md:flex-nowrap justify-between p-4 bg-gray-200">
        <Link to={'/'}>
          <h1 className="text-2xl font-bold">React Interview Preparation</h1>
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
          className="flex-col md:flex-row md:flex justify-between items-center md:items-start w-full md:w-auto hidden"
        >
          {allTopic.map((topic: any, index: any) => (
            <li key={index}>
              <Link
                to={`/${topic.title.split(' ').join('-').toLowerCase()}`}
                className="block mt-4 md:mt-0 md:ml-4 hover:text-blue-500"
                onClick={() => handleTopicSelect(topic)}
              >
                {topic.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="p-4 bg-gray-100 h-[90vh]">
        <Routes>
          <Route
            path='/'
            element={<TopicPage topic={allTopic[0]} />}
          />
          {allTopic.map((topic: any, index: any) => (
            <Route
              key={index}
              path={`/${topic?.title?.split(' ').join('-').toLowerCase()}`}
              element={<TopicPage topic={topic} />}
            />
          ))}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

interface TopicPageProps {
  topic: Topic;
}

function TopicPage({ topic }: TopicPageProps) {
  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="text-2xl font-bold mb-4">{topic.title}</h2>
      <ul>
        {topic.questions.map((question: any, index: any) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
