import React from 'react'
import "./section6.css"
import logo from "./Group.svg"
import add from "./location.svg"
import email from "./email.svg"
const Section6 = () => {
    return (
        <div className="section6">
            <div className="container6">
                <div className="contact">
                    <div className="contact-1">
                        <img src={logo} alt="" />
                        <p className='specialp'>The program is one which rewards users for delivering on certain tasks the company allots.</p>
                    </div>
                    <div className="contact-2">
                        <h1>Address</h1>
                        <div className="box">
                            <div className="img-div">
                                <img src={add} alt="" />
                                <div className="paragraph">
                                    <p className='specialp'>For complaints and question, kindly contact us through the email links below:</p>
                                </div>

                            </div>
                            <div className="img-div emails">
                                <img src={email} alt="" />
                                <div className="paragraph skype">
                                    <p>hello@kudi.com skype: kudi</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="contact-3">

                        <h1>About Us</h1>
                        <div className="box ">
                            <div className="list-div specialbox">
                                <div className="color-div"></div>
                                <p>About Us</p>
                            </div>
                            <div className="list-div specialbox">
                                <div className="color-div"></div>
                                <p>Contact</p>
                            </div>
                            <div className="list-div specialbox">
                                <div className="color-div"></div>
                                <p>Privacy Policy</p>
                            </div>
                            <div className="list-div specialbox">
                                <div className="color-div"></div>
                                <p>Terms & Conditions</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-4">
                        <h1>Resources</h1>
                        <div className="box ">
                            <div className="list-div specialbox">
                                <div className="color-div"></div>
                                <p>How it Works</p>
                            </div>
                            <div className="list-div specialbox">
                                <div className="color-div"></div>
                                <p>Affiliate</p>
                            </div>
                            <div className="list-div specialbox">
                                <div className="color-div"></div>
                                <p>Coupon Vendor</p>
                            </div>
                            <div className="list-div specialbox">
                                <div className="color-div"></div>
                                <p>FAQs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-div">
                    <div className="social-ico-list">
                        <p>Follow Us:</p>
                        <div className="brand social-icons1"></div>
                        <div className="brand social-icons2"></div>
                        <div className="brand social-icons3"></div>
                    </div>
                    <div className="download">
                        <div className="store">
                            <div className="app-icons apple-icon"></div>
                            <div className="app-text">
                                <small>Download on the</small>
                                <p>App Store</p>
                            </div>
                        </div>
                        <div className="store">
                            <div className="app-icons play-icon"></div>
                            <div className="app-text">
                                <small>Download on the</small>
                                <p>play Store</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section6