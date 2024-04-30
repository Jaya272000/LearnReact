import React, { useState } from 'react'

const Numberselector = () => {
  const arrNumber=[1,2,3,4,5,6]
  const [selectnum,setnumber]=useState();
  // console.log(selectnum)

  return (
    <div>
      {/* A easy to to make boxes */}
      {arrNumber.map((value,i)=>(
          <box key={i}
          onClick={()=>setnumber(value)}
          >{value}</box>
        ))}
      {/* it difficult way to make boxes */}
      {/* <box>2</box>
      <box>3</box>
      <box>4</box>
      <box>5</box>
      <box>6</box> */}
    </div>
  )
}

export default Numberselector
