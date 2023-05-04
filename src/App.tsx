import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import DsaTopic from './pages/dsa/DsaTopic';
import JsTopic from './pages/javascript/JsTopic';
import ReactTopic from './pages/react/ReactTopic';
import Home from './pages/home/Home';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dsa",
        element: <DsaTopic />,
        children: [
          {
            path: "/dsa/:topic",
            element: <DsaTopic />,
          },
        ]
      },
      {
        path: "/javascript",
        element: <JsTopic />,
        children: [
          {
            path: "/javascript/:topic",
            element: <JsTopic />,
          },
        ]
      },
      {
        path: "/reactjs",
        element: <ReactTopic />,
        children: [
          {
            path: "/reactjs/:topic",
            element: <ReactTopic />,
          },
        ]
        
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
    <div className='bg-gray-50'>
      <RouterProvider router={appRouter} />
    </div>
  );
}


export default App;
