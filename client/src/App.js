import logo from './logo.svg';
import './App.css';

import io from "socket.io-client";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const socket = io.connect("http://localhost:4000");
    return () => {
      socket.disconnect();
    }
  })
  
  
  return (
    <div classname="App">Hello world!</div>
  );
}

export default App;
