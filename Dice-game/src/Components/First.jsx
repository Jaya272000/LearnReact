import React from 'react'

const First = ({toggle}) => {
  return (
    <div className='Container'>
      <img src="/images/dices 1.png" alt="" /> 
      <div className="Snd-container">
        <h1>DICE GAME</h1>
        <button onClick={toggle}>Play Now</button>
      </div>

      
    </div>
  )
}

export default First;
