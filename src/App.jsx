import React from "react";
import { state, useState } from "react";
import { useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Card from "./components/card";
import Useeffect from "./components/useeffect";

const App = () => {
  // const [count, setCount] = useState(0);
  const [form, setForm] = useState({
    email : "",
    phone : ""
  })

  // const [todo , SetTodo] = React.useState([
  //       {
  //         title : "first todo",
  //         desc : "this is the first todo"
  //       },
  //       {
  //         title : "second todo",
  //         desc : "this is the second todo"
  //       },
  //       {
  //         title : "third todo",
  //         desc : "this is the third todo"
  //       }
  //     ])
  //     const Todo =({todo})=>{
  //       return(
  //           <>
  //           <div className="todo">{todo.title}</div>
  //           <div className="todo">{todo.desc}</div>
  //           </>
  //       )
  //   }

  // useEffect(() => {
  //   alert("hey wlecome to my page");
  // }, [])

  const handlechange =(e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value,

    })
    console.log(form);
  }
  
  
  return (
    <>

    {/* {todo.map((todo)=>(
      <Todo todo={todo} />
    ))} */}


      <Navbar />

      {/* <div className="cards">
        <Card title="card1"  description ="THis is the description of the card1"/>
        <Card title="card2"  description ="THis is the description of the card2"/>
        <Card title="card3"  description ="THis is the description of the card3"/>
        <Card title="card4"  description ="THis is the description of the card4"/>
        
      </div> */}

      <input type="text" name="email" value={form.email}  onChange={handlechange}/>
      <input type="text" name="phone" value={form.phone}  onChange={handlechange}/>




      <Footer />
      {/* <Useeffect color ="red"/> */}


    </>
    // hooks and state in react
  );
};

export default App;
