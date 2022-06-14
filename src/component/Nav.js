import React from 'react'
import  "./nav.css";
import logo from "./Group.svg"
const nav = () => {
  return (
    <div className='Nav'>
      <div className='container'>
        <div className='logo'>
          <img src={logo} alt= 'logo'/>
        </div>
        
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>How it Works</li>
          <li>Affilate</li>
          <li>Coupon Vendor</li>
          <li>FAQs</li>
          <li>Contacts</li>
        </ul>

        <div className='button'>
        <button className='button1'>Login</button>
        <button className='button2'>Get Started</button>
        </div>
        <div className='menu'>
        </div>
      </div>  
    </div>
  )
}

export default nav
