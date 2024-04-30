import React, { useState } from 'react'

const form = () => {
  const [firstname,setfirstname]=useState(' ')
  const[lastname,setlastname]=useState(' ')
  const fullname=firstname+" "+lastname

  const handleinputfirst=(e)=>{
    setfirstname(e.target.value)

  const handleinputlast=(e)=>{
    setlastname(e.target.value)
  }                                                                                                                                         
  }
  return (
    <div>
      <h1>Let check you In</h1>
      <label>First name</label>
      <input type="text" onChange={handleinputfirst} />
      <label >Last Name</label>
      <input type="text" onChange={handleinputlast}/>
      <p>your name will  be {fullname}</p>
      
    </div>
  )
}

export default form
