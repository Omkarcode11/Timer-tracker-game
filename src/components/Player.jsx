import { useRef, useState } from "react";

export default function Player() {

  const playerName = useRef()
  
  const [player,setPlayer] = useState()
  // const [submitted,setSubmitted] = useState(false)

  


  function handleClick(){
     setPlayer(playerName.current.value)
     playerName.current.value = ""
  }


  return (
    <section id="player">
      <h2>Welcome {player ?? "Unknown Player"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
