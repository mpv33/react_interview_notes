export interface Topic {
    title: string;
    questions: string[];
  }
  
  export const allTopic: Topic[] = [
      
    {
      title: 'React Basics',
      questions: [
        'What is React?',
        'What are the advantages of using React?',
        'React Components',
        'JSX Syntax',
        'Virtual DOM',
        'React Props',
        'React State',
        'React Lifecycle Methods',
        'React Events',
        'React Hooks'
      ]
    },
    {
      title: 'React Router',
      questions: [
        'What is React Router?',
        'Implementing React Router',
        'Routing Configuration',
        'Route Parameters',
        'Nested Routes',
        'React Suspense'
      ]
    },
    {
      title: 'Redux',
      questions: [
        'What is Redux?',
        'Why use Redux?',
        'Redux Store',
        'Redux Actions',
        'Redux Reducers',
        'Redux Thunk',
        'Connecting Redux to React'
      ]
    },
    // {
    //   title: 'React Native',
    //   questions: [
    //     'What is React Native?',
    //     'Advantages of React Native',
    //     'React Native Components',
    //     'Styling in React Native',
    //     'Layouts in React Native',
    //     'Navigation in React Native',
    //     'Handling User Input in React Native',
    //     'React Native Animations'
    //   ]
    // },
    {
      title: 'Advanced React Topics',
      questions: [
        'Higher-Order Components',
        'Render Props',
        'Context API',
        'React Portals',
        'Server-Side Rendering',
        'Lazy Loading in React',
        'Code Splitting in React',
        'React Performance Optimization',
        'React Design Patterns'
      ]
    },
    {
      title: 'Other Related Topics',
      questions: [
        'TypeScript with React',
        'React with Webpack',
        'React with Babel',
        'React Testing Library',
        'Enzyme Testing Library',
        'React Best Practices',
        'React Project Structure',
        'React Project Deployment'
      ]
    }
  ];
  