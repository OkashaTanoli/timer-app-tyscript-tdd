import React from 'react'
import './timerbutton.css'
import { BsPlayFill, BsFillPauseFill } from 'react-icons/bs'
import { BiReset } from 'react-icons/bi'

type Func = {
    text: string,
    func: () => void
}

function TimerButton({ text, func }: Func) {
    return (
        <div title={text} className='timer_button' onClick={()=>{func()}}>
            {
                text === 'start' ? <BsPlayFill size={40} className='icons' /> :
                    text === 'pause' ? <BsFillPauseFill size={35} className='icons' /> :
                        text === 'reset' ? <BiReset size={35} className='icons' /> :
                        false
           }
        </div>
    )
}
export default TimerButton