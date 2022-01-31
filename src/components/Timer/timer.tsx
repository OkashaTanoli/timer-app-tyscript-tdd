import React, { useEffect, useState } from "react";
import './timer.css'
import TimerButton from "./TimerButtons/timerbuttons";
import TimerClock from "./TimerClock/timerclock";
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { BsPlayFill, BsFillPauseFill } from 'react-icons/bs'
import { BiReset } from 'react-icons/bi'
import { ImCancelCircle } from 'react-icons/im'

type TimerType = {
    secChanger: (e: any) => void;
    minChanger: (e: any) => void;
    selectMin: number;
    selectSec: number;
}
function Timer({ secChanger, minChanger, selectMin, selectSec }: TimerType) {

    const [isOn, setIsOn] = useState<boolean>(false)
    const [sec, setSec] = useState<number>(20)
    const [min, setMin] = useState<number>(0)
    const [isReset, setIsReset] = useState<boolean>(false)
    const [toggle, setToggle] = useState(false)
    const [instructions, setInstructions] = React.useState(false)
    const startTimerClock = () => {
        setIsOn(true)
        setIsReset(true)
    }
    let myinterval: any;
    useEffect(() => {
        // console.log("before" + sec, min, isOn)

        if (isOn === true) {
            myinterval = window.setTimeout(() => {
                if (sec > 0) {
                    setSec(sec - 1)
                }
                if (sec === 0) {
                    if (min === 0) {
                        window.clearTimeout(myinterval)
                        alert('Time Up. Please Rest to set timer again')

                    }
                    else {
                        setSec(59)
                        setMin(min - 1)
                    }
                }
            }, 1000)
        }
    }, [isOn, min, sec])

    const stopTimerClock = () => {
        setIsOn(false)
        clearTimeout(myinterval)
    }
    const resetTimerClock = () => {
        clearTimeout(myinterval)
        setSec(selectSec)
        setMin(selectMin)
        setIsOn(false)
        setIsReset(false)
    }
    const SetTimer = () => {
        setSec(selectSec)
        setMin(selectMin)
    }
    let windoww: boolean = window.innerWidth <= 450

    return (
        <div className="main_timer">

            {/* Instructions Div  */}

            <div className="instructions_div" id={instructions?'show_instructions_div':'hide_instructions_div'} >
                <ImCancelCircle size={40} style={{cursor:'pointer'}} color="red" onClick={() => { setInstructions(false) }} />
                <h1>Instructions</h1>
                <ul className="unordered_list">
                    <li>Set timer before starting timer.</li>
                    <li>Reset Time after the time is completed</li>
                    <li>If the timer is started you can not set timer until you reset it.</li>
                    <li>After reseting timer the timer value will be the same of input values.</li>
                    <li><div><BsPlayFill size={30} />{' => '}  to play</div></li>
                    <li><div><BsFillPauseFill size={30} />{' => '} to pause</div></li>
                    <li><div><BiReset size={30} />{' => '} to reset</div></li>
                </ul>
            </div>

            {/* Instructions Div End  */}



            {/* Head Section */}

            <div className="timer_app_head_section">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1 className="timer_app_head">Timer App</h1>
                    <HiOutlineMenuAlt3 className="menu_icon" color="rgb(29, 28, 28)" onClick={() => { setToggle(toggle ? false : true) }} size={35} />
                </div>
                <div className="set_time" id={windoww ? toggle ? 'show_menu' : 'dont_show_menu' : ''}>

                    <div className="set_min">
                        <h3 className="min_heading">Min</h3>
                        <input disabled={isReset} value={selectMin} onChange={(e)=> minChanger(Number(e.target.value)) } className="input input1"  min={0} max={25} type="number" />
                    </div>
                    <div className="set_sec">
                        <h3 className="min_heading">Sec</h3>
                        <input disabled={isReset} value={selectSec} onChange={(e)=> secChanger(Number(e.target.value)) } className="input input2" min={selectMin === 0 ? 20 : 0} max={selectMin === 25 ? 0 : 59} type="number" />
                    </div>
                    <button disabled={isReset} className="set_timer_btn" onClick={() => SetTimer()}>Set Timer</button>
                </div>
            </div>

            {/* Head Section Ends */}
            
            {/* Main Body */}
            <div className="extra_div"></div>
            <TimerClock selectMin={selectMin} selectSec={selectSec} isReset={isReset} second={sec} minute={min} />
            <div className="timer_btns_div">
                <TimerButton text='start' func={startTimerClock} />
                <TimerButton text='pause' func={stopTimerClock} />
                <TimerButton text='reset' func={resetTimerClock} />
            </div>
            <p className="instructions" onClick={() => { setInstructions(true) }}>Instructions</p>
        </div>
    )
}

export default Timer