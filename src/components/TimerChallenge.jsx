import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

function TimerChallenge({ title, targetTime }) {
  // const [timerExpire, setTimerExpire] = useState(false);
  // const [timerStatus, setTimerStatus] = useState(false);
  const [remainTime,setRemainTime] = useState(targetTime*1000)
  let timerId = useRef()
  const modal = useRef(null);

  function handleStart() {
    // setTimerStatus(true);
    // setTimerExpire(false)
    timerId.current = setInterval(() => {
      // setTimerExpire(true);
      // setTimerStatus(false);
      // if(modal.current)
        setRemainTime(prev=>prev-10)
    },10);
  }
  if(remainTime<=0){
    clearInterval(timerId.current)
    modal.current.show()
    // setRemainTime(targetTime*1000)
  }
  
  let timeExpire =  remainTime>0 && remainTime<targetTime*1000
  
  function handleStop() {
    clearInterval(timerId.current);
    modal.current.show()
    // setRemainTime(targetTime*1000)
    // setTimerStatus(false)
  // setTimerExpire(true)
  }

  return (
    <>
     <ResultModal ref={modal} targetTime={targetTime} setRemainTime={setRemainTime} result={remainTime}/>
    <section className='challenge'>
      <h2>{title}</h2>
      {/* {timerExpire && <p>You Lost</p>} */}
      <p className='challenge-time'>
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timeExpire ? handleStop : handleStart}>
          {timeExpire ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timeExpire ? "active" : ""}>
        {`Time is ${timeExpire ? "Running" : "Inactive"}`}
      </p>
    </section>
    </>
  );
}

export default TimerChallenge;
