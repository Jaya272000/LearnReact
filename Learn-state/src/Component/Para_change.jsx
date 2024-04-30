import React from 'react'
import { useState } from 'react'


const Para_change = () => {
  const[myname,setmyname]=useState('jaya')
  const[bgname,setmybg]=useState('red')
  function changename(){
    setmyname((state)=>(state==="jaya" ? "Priyanshu": "jaya")) 
    setmybg((state)=>(state=='red'? 'cyan': 'red'))   
    
  }

  return (
    <>
    <div className="container" style={{backgroundColor:bgname}}>
      {myname}
   </div>
      <button onClick={changename}>Click</button>

      
    </>
  )
}

export default Para_change
