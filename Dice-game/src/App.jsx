import { useState } from 'react'
import './App.css'
import First from './Components/First'
import Game_play from './Components/Game_play';

function App() {
  const[ISset,setindex]=useState(true);

  const togglgameevent=()=>{
    setindex((prev)=>!prev)


  }
  
  return (
    <>
    {/* here we are checking that if isset is true then start game play other wise start first component */}
    {ISset? <Game_play/> : <First
    toggle={togglgameevent}
    />}

    </>
  )
}

export default App
