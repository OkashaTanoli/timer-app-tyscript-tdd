import React, { useState } from 'react';
import './App.css';
import Timer from './components/Timer/timer';

function App() {
  const [selectSec, setSelectSec] = useState(20)
  const [selectMin, setSelectMin] = useState(0)

  const minChanger = (e:number) => {
    // let e:number = Number(event.target.value)

    e > 25 ? setSelectMin(25)  : e < 0 ? setSelectMin(0) : setSelectMin(e)
    if (e === 0 && selectSec < 20) {
      setSelectSec(20)
    }
    if (e >= 25) {
      setSelectSec(0)
    }
  }

  const secChanger = (e: number) => {
    // console.log(event.target.value)
    // let e:number = Number(event.target.value)
    selectMin === 25 || e < 0 ? setSelectSec(0) : e > 59 ? setSelectSec(59) :selectMin === 0 && e<20?setSelectSec(20): setSelectSec(e)
  }

  return (
    <div className="App">
      <div className='bg_div'></div>
      <Timer selectMin={selectMin} selectSec={selectSec} secChanger={secChanger} minChanger={minChanger} />
    </div>
  );
}

export default App;
