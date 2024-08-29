import React, { useState } from "react";

const Jiopaymet1 = () => {
    const [showPopup, setShowPopup] = useState(false);

    // Function to handle button click
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    return (
        <>
            <div className="paymnet">
                <div className="container">
                    <div className="payment-inner">
                        <div className="payment-title">
                            <h4>Payments</h4>
                        </div>
                    </div>

                </div>
                <div className="phonepay">
                    <img src="assets/img/download.png" alt="" />
                </div>
                <div className="title">
                    <p>offer ends in</p>
                </div>
                <div class="logo-container">
                    <div className="container">
                        <div className="logo-inner">
                            <img src="assets/img/download.svg" alt="Company Logo" class="logo" />
                            <span class="company-name">Company Name</span>
                        </div>
                    </div>
                </div>
                <div className="price-details">

                    <div className="price-inner">
                        <div className="price-title">
                            <b>Price Details</b>
                        </div>
                        <div className="item">
                            <div className="item-inner">
                                <p>Price (1 item)</p>
                                <p className="right">₹ 4999</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-inner border" style={{ borderBottom: "1px solid gray" }}>
                                <p>Delivery Charges</p>
                                <p className="right" >FREE</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-inner">
                                <p>Amount Payable</p>
                                <p className="right">₹ 249</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="payment-logo">
                    <img src="assets/img/download.jpeg" alt="download" />
                </div>
                <div className="continue">
                    <div className="price-details">
                        <p className="line">₹ 4999</p>
                        <p >₹ 249</p>
                    </div>
                
                    <div className="btns">
                        {/* Button to trigger popup */}
                        <button onClick={togglePopup}>
                             {showPopup ? "Continue" : "Continue"} 
                        </button>

                        {/* Popup Component */}
                        {showPopup && (
                            <div className="popup">
                                <div className="popup-content">
                                    <h2>rechargekarloo.xyz says</h2>
                                    <p>Google Pay is not ready to pay.</p>
                                    <button className="rights" onClick={togglePopup}>okay</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Jiopaymet1;