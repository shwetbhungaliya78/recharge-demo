import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {

    const navigate = useNavigate()
    const [company, setCompany] = useState(0);
    const [number, setNumber] = useState(0)
    const change = (e, type, value) => {
        setCompany(value)
    }

    const recharge = () => {
        if (company === 0) {
            navigate(`/jio?number=${number}`)
        } else if (company === 1) {
            navigate(`/airtel?number=${number}`)
        }
        else if (company === 2) {
            navigate(`/we?number=${number}`)
            
        }
        else if (company === 3) {
            navigate(`/bsnl?number=${number}`)
          
        }
    }
    const numbers = (value) => {
        setNumber(value)

    }



    return (
        <>
            <div className="main">

                <header className="header">
                    <div className="left-icons">
                        <img src="/assets/img/30-512.webp" alt="Left Icon 1" className="icon" />
                        <img src="assets/img/logo.b0d577131335e4cfc4d5.png" alt="Left Icon 2" className="icon" />
                    </div>
                    <div className="right-icon">
                        <img src="assets/img/1000_F_336985736_1uuq9I56Fdl0E8crm69F77OWdcyvjoPb.jpg" alt="Right Icon" className="icon" />
                    </div>
                </header>
                <div className="main-silder">
                    <div className="first-img">
                        <img src="/assets/img/mbanner.f6ed4f8abb8f93dd0f60.png" alt="Left Icon 1" className="icon" />
                    </div>
                    <div className="second-img">
                        <img src="assets/img/b23.af193e2315843a6390a9.png" alt="Left Icon 2" className="icon" />
                    </div>
                </div>
                <div className="timer">
                    <div className="timer-inner">
                        <b>spaical offer end in: <img src="/assets/img/istockphoto-1141295444-612x612.jpg" alt="" /> EXPRIED</b>
                    </div>
                </div>
                <div className="main-mobile">
                    <div className="container">
                        <div className="mobile-inner">
                            <div className="mobile">
                                <div className="title">
                                    <img src="/assets/img/images.png" alt="Mobile Recharge" />
                                    <b>mobile recharge</b>
                                </div>

                            </div>
                            <div className="network">
                                <div className="network-inner">
                                    <p>Select Network Provider</p>
                                </div>
                                <div className="radio">
                                    <label className="radio-item">
                                        <input type="radio" name="company" id="jio" value={company} onChange={(e) => change(e, "jio", 0)} />
                                        jio
                                    </label>
                                    <label className="radio-item">
                                        <input type="radio" name="company" id="airtel" value={company} onChange={(e) => change(e, "Airtel", 1)} />
                                        Airtel
                                    </label>
                                    <label className="radio-item">
                                        <input type="radio" name="company" id="we" value={company} onChange={(e) => change(e, "WE", 2)} />
                                        VI
                                    </label>
                                    <label className="radio-item">
                                        <input type="radio" name="company" id="bsnl" value={company} onChange={(e) => change(e, "Bsnl", 3)} />
                                        Bsnl
                                    </label>
                                </div>
                            </div>
                            <div className="network">
                                <div className="network-inner">
                                    <p>moblie number</p>
                                </div>
                                <div className="radio1">
                                    <label className="radio-item1">
                                        <input type="number" name="number" placeholder="+91 xxxxx xxxxx" onChange={(e) => numbers(e.target.value)} />
                                    </label>
                                </div>
                                <div className="radio2">
                                    <label className="radio-item2">
                                        <button type="button" name="jio" value="rechge" onClick={(e) => recharge(e)}>Recharge</button>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ladst-img">
                    <img src="assets/img/banner1.ccc5148048f900bda7f5.jpg" alt="" />
                </div>
            </div>
        </>
    )
}
export default Header