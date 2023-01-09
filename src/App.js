
import './App.css';
// import Clock from './components/Clock';
// import { useState } from 'react';
import Blog from './components/Blog';

function App() {
// const [flag, setFlag] = useState(true);

const posts = [
  {
    id: 1,
    title: "hello",
    content: "welcome",
  },
  {
    id: 2,
    title: "install",
    content: "install app",
  },
];


  return ( 
    <>
      <Blog posts={posts}/>
    </>
  );
}

export default App;
