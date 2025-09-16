import React from "react";
import { state, useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Card from "./components/card";

const App = () => {
  const [count, setCount] = useState(0);
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
    </>
    // hooks and state in react
  );
};

export default App;
