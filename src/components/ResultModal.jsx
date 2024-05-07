import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import {createPortal} from 'react-dom'


const ResultModal = forwardRef(function ResultModal({result,setRemainTime,targetTime},ref) {
    let modalRef = useRef()

    useImperativeHandle(ref,()=>(
        {show}
    ))

    function show(){
        return modalRef.current.showModal()
    }
    

  return createPortal(
    <dialog ref={modalRef} className='result-modal'>
        <h2>You {result==0?"Lost":`Won Score:${Math.round((1-result/(targetTime*1000))*100)}`} </h2>
        <p>Target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stop time with <strong>{(result/1000).toFixed(2)} seconds left.</strong></p>
        <form method='dialog' onSubmit={()=>setRemainTime(targetTime*1000)}>
            <button>Close</button>
        </form>
    </dialog>
  ,document.getElementById("modal"))
})

export default ResultModal