import React from 'react'
import { useState } from 'react'

const Register = () => {
  const[email,setemail]=useState()
  const[password,setpassword]=useState()



  function handleRegister(e){
    e.preventDefault()
    console.log("Hello world")

  }
  console.log(email)
  console.log(password)
  return (
    <div>
      <input className="form-input" type="email" placeholder='Enter Email' value={email} 
      onChange={(e)=>setemail(e.target.value)}
      />
      <input type="password" placeholder='Enter Password' value={password}
      onChange={(e)=>setpassword(e.target.value)}
       />
      <button onClick={handleRegister}>submit</button>
    </div>
  )
}

export default Register
