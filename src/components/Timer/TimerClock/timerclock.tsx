import React from "react";
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './timerclock.css'


type TimerClockType = {
    second: number;
    minute: number,
    selectMin: number,
    selectSec: number;
    isReset: boolean
}
function TimerClock({ second, minute, selectMin, selectSec, isReset }: TimerClockType) {

    type buildStylesType = {
        rotation: number,
        strokeLinecap: string,
        textSize: string,
        pathTransitionDuration: number
        pathColor: string,
        trailColor: string,


    }

    let buildstyles: buildStylesType = {
        rotation: 1,
        strokeLinecap: 'bull',
        textSize: '16px',
        pathTransitionDuration: 0.5,
        pathColor: `${minute === 0 && second < 15 ? 'red' : 'rgb(94, 77, 0)'}`,
        trailColor: 'rgba(59, 33, 0,0.25)',
    }
    let percentage = ((minute * 60 + second) * 100) / (selectMin * 60 + selectSec)
    return (
        <div className="timer_clock" id={minute === 0 && second < 15 && second > 0 ? 'danger' : ''}>
            <CircularProgressbarWithChildren strokeWidth={5} value={isReset === false ? 100 : percentage} styles={buildStyles(buildstyles)} >
                <h1 className="clock_time">{minute < 10 ? `0${minute}` : minute} : {second < 10 ? `0${second}` : second}</h1>
            </CircularProgressbarWithChildren>
        </div>
    )
}
export default TimerClock