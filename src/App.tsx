import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import DsaTopic from './pages/dsa/DsaTopic';
import JsTopic from './pages/javascript/JsTopic';
import ReactTopic from './pages/react/ReactTopic';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <DsaTopic />,
      },
      {
        path: "/dsa",
        element: <DsaTopic />,
      },
      {
        path: "/javascript",
        element: <JsTopic />,
      },
      {
        path: "/reactjs",
        element: <ReactTopic />,
      },
      // {
      //   path: "/nodejs",
      //   element: <Home />,
      // },
      // {
      //   path: "/projects",
      //   element: <Home />,
      // },
    ],
  },
]);

function App() {
  return (
    <div className='bg-gray-100'>
      <RouterProvider router={appRouter} />
    </div>
  );
}


export default App;
