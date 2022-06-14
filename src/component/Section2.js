import React from 'react'
import "./section2.css";
import icon1 from "./col-icon.png"
import icon2 from "./col-icon2.png"
import icon3 from "./col-icon3.png"
const Main2 = () => {
  return (
    <div className="section2">
        <div className="container2">
            <h1>How to earn with Kudi?</h1>
            <div className="col-div">
              <div className="col1">
                <div className="col-img icon1">
                  <img src={icon1} alt=""/>
                </div>
                <div className="text">
                  <h3>Affiliate</h3>
                  <small>What you do as an affliate is to share these ADs to your Facebook page daily and get paid based on your activities and package.</small>
                </div>
              </div>
              <div className="col1">
                <div className="col-img icon2">
                  <img src={icon2} alt=""/>
                </div>
                <div className="text">
                  <h3>Referer</h3>
                  <small>On kudi.com we reward every member's hard work; Each package on has its own referral bonus.</small>
                </div>
              </div>
              <div className="col1">
                <div className="col-img icon3">
                  <img src={icon3} alt=""/>
                </div>
                <div className="text">
                  <h3>Membership</h3>
                  <small>Practically anyone can be a member Kudi.com as all you need is an internet enabled device.</small>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Main2