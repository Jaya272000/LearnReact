import React from 'react'

const Card = ({username,age}) => {
  return (
    <div className='student'>
      <p>{username}</p>
      <p>{age}</p>
    </div>
  )
}

export default Card
