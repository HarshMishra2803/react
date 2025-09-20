import React from 'react'
import { useEffect ,useRef} from 'react'
import "./useeffect.css"

const useeffect = () => {

    const [count , SetCount] = React.useState(0)
    const [color , SetColor] = React.useState("red")
    

    const btnref = useRef()

    useEffect(() => {
      console.log("first rendering ....")
      btnref.current.style.backgroundColor = "red"
    }, [])
    

    // useEffect(() => {
    //   alert("hey wlecome to my page");
    // }, [])

    // useEffect(() => {   
    //     if(count > 5){      
    //         SetColor("green")
    //     }
    //     else{
    //         SetColor("red")
    //     }
    // }, [count])
  return (
    <>

      <div>hey i am the useeffect components {count} </div>
      <div> i am in the {color + count} color</div>


      <button  ref={btnref} onClick={()=>{SetCount(count+1)}} >clickME</button>
    </>
  )
}

const todo =()=>{
    return(
        <>
        <div>hey i am the todo components</div>
        </>
    )
}

export default useeffect
