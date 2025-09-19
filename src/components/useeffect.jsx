import React from 'react'
import { useEffect } from 'react'

const useeffect = () => {

    const [count , SetCount] = React.useState(0)
    const [color , SetColor] = React.useState("red")

    useEffect(() => {
      alert("hey wlecome to my page");
    }, [])

    useEffect(() => {   
        if(count > 5){      
            SetColor("green")
        }
        else{
            SetColor("red")
        }
    }, [count])
  return (
    <>
      <div>hey i am the useeffect components {count} </div>
      <div> i am in the {color + count} color</div>
      <button onClick={()=>{SetCount(count+1)}} >clickME</button>
    </>
  )
}

export default useeffect
