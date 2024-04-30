import React from 'react'

const App = () => {
  function handleRegister(e){
    e.preventDefault();
    console.log("Hello world")
  }

  let age=18;
  let emailid='jaya22@navgurukul.org';
  return (
      <form>
        {age>=18 && emailid=='jaya22@navgurukul.org' ?(
          <div>
           <input type="email"  placeholder='Enter Email'/>
           <button onClick={handleRegister}>Submit</button>
           </div>
        ): (
          <h1>You are not jaya Srivastava,</h1>
        )}
      </form>
  )
}
export default App
