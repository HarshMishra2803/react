import React from 'react'
import {state, useState} from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'



const App = () => {

  const [count, setCount] = useState(0);
  return (
    <>
    <Navbar/>
    <Footer/>
  
    </>
  );
}

export default App
