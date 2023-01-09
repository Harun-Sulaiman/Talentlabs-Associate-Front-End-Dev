
import './App.css';
import Clock from './components/Clock';
import { useState } from 'react';

function App() {
  const [flag, setFlag] = useState(true);


const toggle = () => { 
  console.log ("Toggle Clicked");
  setFlag (!flag); 
  };
  return ( 
    <>
      <button onClick= {toggle}>Toggle Clock Component</button>
      {flag ? <Clock /> : "Clock Off"}
  
    </>
  );
}

export default App;
