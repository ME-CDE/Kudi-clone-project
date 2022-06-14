import React from 'react'
import "./section1.css";
import person from "./person.svg"
import basket from "./basket.svg"
const Main = () => {
  return (
    <div className='section'>
      <div className='container1'>
        <div className='col-1'>
          <div className='pson'>
            <img src={person} alt='person' />
            <p>7,420 Users</p>
          </div>
          <div className='pson'>
            <img src={basket} alt='shop' />
            <p>8,908 Investments</p>
          </div>
          <p>....richer journey that leads to success.</p>
          <div className="pson1">
          <h1>Welcome to Kudi</h1>
          <p>The largest affiliate marketing company with the fastest growing subscriber base in Africa</p>
          <button>Get Started</button>
          </div>
        </div>
        <div className='col-2'>
        </div>
      </div>
    </div>
  )
}

export default Main