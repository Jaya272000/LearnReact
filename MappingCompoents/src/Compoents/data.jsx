import React from 'react'

const Data = () => {
  let data=[
    {
      name:"jaya",
      email:"jaya22@navgurukul.org",
      roll: "12",
  
    },
  
    {
      name:"Babita",
      email:"babita23@navgurukul.org",
      roll: "1"
  
    },
    {
      name:"sumitra",
      email:"sumirta@navgurukul.org",
      roll: "23"
  
    }
    
    
  
  ]
  return (
    <div>
      {data.map(({name,email,roll})=>(
          <div>
              <h1>{name}</h1>
              <p>{email}</p>
              <p>{roll}</p>
          </div>
      ))}   
    </div>
  );
}

export default Data
