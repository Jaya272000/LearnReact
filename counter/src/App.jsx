import { useState } from 'react'
import './App.css'

function App() {
  const[counter,setcounter]=useState(0)
  // let counter=0
  
  let addvalues=()=>{
  //   setcounter((preCounter)=>preCounter+1)
  //   setcounter((preCounter)=>preCounter+1)
  //   setcounter((preCounter)=>preCounter+1)
  //   setcounter((preCounter)=>preCounter+1)
    setcounter(counter+1)
    counter++
    // console.log(counter)
   }
  let addvalues1=()=>{
    setcounter(counter-1)
  }
  return (
    <>
    <h1>Learn React {counter}</h1>
    <p>Counter value:{counter}</p>
    <button onClick={addvalues}>Add value</button>{" "}
    <button onClick={addvalues1}>Remove Value</button>
    <p>footer:{counter}</p>
    
    </>
  )
}
export default App
