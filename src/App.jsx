import React from "react";
import { state, useState } from "react";
import { useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Card from "./components/card";
import Useeffect from "./components/useeffect";

const App = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   alert("hey wlecome to my page");
  // }, [])
  
  
  return (
    <>
      <Navbar />

      <div className="cards">
        <Card title="card1"  description ="THis is the description of the card1"/>
        <Card title="card2"  description ="THis is the description of the card2"/>
        <Card title="card3"  description ="THis is the description of the card3"/>
        <Card title="card4"  description ="THis is the description of the card4"/>
        
      </div>
      <Footer />
      <Useeffect color ="red"/>


    </>
    // hooks and state in react
  );
};

export default App;
