import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import payment1 from "./jiopaymet1";

const Jio = () => {

   const navigate = useNavigate()
   const urlParam = new URLSearchParams(window.location.search)


   return (

      <>
         <div className="main-recharge">
            <header className="header">
               <div className="left-icons">
                  <img src="/assets/img/30-512.webp" alt="Left Icon 1" className="icon" />
                  <img src="assets/img/logo.b0d577131335e4cfc4d5.png" alt="Left Icon 2" className="icon" />
               </div>
               <div className="right-icon">
                  <img src="assets/img/1000_F_336985736_1uuq9I56Fdl0E8crm69F77OWdcyvjoPb.jpg" alt="Right Icon" className="icon" />
               </div>
            </header>
            <div className="jio">

               <div class="headers">
                  <div class="logo">
                     <img src="assets/img/Reliance_Jio_Logo.svg.png" alt="Company Logo" />
                     <div class="company-name">
                        <p>Recharge for:{urlParam.get("number")}</p>
                        <p>Jio Prepaid </p>
                     </div>
                  </div>
                  <a href="#" class="link" onClick={() => navigate("/")}>Change</a>
               </div>

            </div>
            <div className="new">
               <div className="new-inner">
                  <div className="title">
                     <p>NEW!</p>
                     <b>RECHAEGE & OFFERS</b>
                  </div>
               </div>
            </div>
            <div className="new-rechrge">
               <div className="container">
                  <div className="new-inner">
                     <div className="new-text">
                        <b>new</b>
                     </div>
                     <div className="price">
                        <div className="price-text">
                           <b>₹ 149</b>
                           <b className="decoration">₹ 749</b>
                        </div>
                        <div className="data-img">
                           <img src="assets/img/5g.eec5aabd88995f7798a04639984c429a.svg" alt="" />
                        </div>
                     </div>
                     <div className="plan">
                        <div className="plan-inner">
                           <div className="validity">VALIDITY</div>
                           <div className="validitdays">84 days</div>
                        </div>
                        <div className="plan-inner">
                           <div className="validity">Data</div>
                           <div className="validitdays">1.5 GB/day </div>
                        </div>
                        <div className="plan-inner">
                           <div className="validity">Voice</div>
                           <div className="validitdays">Unlimetd</div>
                        </div>
                        <div className="plan-inner">
                           <div className="validity">SMS</div>
                           <div className="validitdays">100/days</div>
                        </div>
                     </div>
                     <div className="btn">
                        <button type="button" onClick={() => navigate("/jiopayment")}>Recharge</button>
                     </div>
                  </div>

                  <div className="new-inner">
                     <div className="new-text">
                        <b>new</b>
                     </div>
                     <div className="price">
                        <div className="price-text">
                           <b>₹ 389</b>
                           <b className="decoration">₹ 2449</b>
                        </div>
                        <div className="data-img">
                           <img src="assets/img/5g.eec5aabd88995f7798a04639984c429a.svg" alt="" />
                        </div>
                     </div>
                     <div className="plan">
                        <div className="plan-inner">
                           <div className="validity">VALIDITY</div>
                           <div className="validitdays">12 months</div>
                        </div>
                        <div className="plan-inner">
                           <div className="validity">Data</div>
                           <div className="validitdays">2.0 GB/day </div>
                        </div>
                        <div className="plan-inner">
                           <div className="validity">Voice</div>
                           <div className="validitdays">Unlimetd</div>
                        </div>
                        <div className="plan-inner">
                           <div className="validity">SMS</div>
                           <div className="validitdays">100/days</div>
                        </div>
                     </div>
                     <div className="btn">
                        <button type="button" onClick={() => navigate("/jiopayment2")}>Recharge</button>
                     </div>
                  </div>

                  <div className="new-inner">
                     <div className="new-text">
                        <b>new</b>
                     </div>
                     <div className="price">
                        <div className="price-text">
                           <b>₹ 279</b>
                           <b className="decoration">₹ 1299</b>
                        </div>
                        <div className="data-img">
                           <img src="assets/img/5g.eec5aabd88995f7798a04639984c429a.svg" alt="" />
                        </div>
                     </div>
                     <div className="plan">
                        <div className="plan-inner">
                           <div className="validity">VALIDITY</div>
                           <div className="validitdays">84 days</div>
                        </div>
                        <div className="plan-inner">
                           <div className="validity">Data</div>
                           <div className="validitdays">3.0 GB/day </div>
                        </div>
                        <div className="plan-inner">
                           <div className="validity">Voice</div>
                           <div className="validitdays">Unlimetd</div>
                        </div>
                        <div className="plan-inner">
                           <div className="validity">SMS</div>
                           <div className="validitdays">100/days</div>
                        </div>
                     </div>
                     <div className="btn">
                        <button type="button" onClick={() => navigate("/jiopayment3")}>Recharge</button>
                     </div>
                  </div>


                  <div className="new-inner">
                     <div className="new-text">
                        <b>new</b>
                     </div>
                     <div className="price">
                        <div className="price-text">
                           <b>₹ 249</b>
                           <b className="decoration">₹ 1299</b>
                        </div>
                        <div className="data-img">
                           <img src="assets/img/5g.eec5aabd88995f7798a04639984c429a.svg" alt="" />
                        </div>
                     </div>
                     <div className="plan">
                        <div className="plan-inner">
                           <div className="validity">VALIDITY</div>
                           <div className="validitdays">84 days</div>
                        </div>
                        <div className="plan-inner">
                           <div className="validity">Data</div>
                           <div className="validitdays">2.0 GB/day </div>
                        </div>
                        <div className="plan-inner">
                           <div className="validity">Voice</div>
                           <div className="validitdays">Unlimetd</div>
                        </div>
                        <div className="plan-inner">
                           <div className="validity">SMS</div>
                           <div className="validitdays">100/days</div>
                        </div>
                     </div>
                     <div className="btn">
                        <button type="button" onClick={() => navigate("/jiopayment4")}>Recharge</button>
                     </div>
                  </div>


                  <div className="new-inner">
                     <div className="new-text">
                        <b>new</b>
                     </div>
                     <div className="price">
                        <div className="price-text">
                           <b>₹ 199</b>
                           <b className="decoration">₹ 999</b>
                        </div>
                        <div className="data-img">
                           <img src="assets/img/5g.eec5aabd88995f7798a04639984c429a.svg" alt="" />
                        </div>
                     </div>
                     <div className="plan">
                        <div className="plan-inner">
                           <div className="validity">VALIDITY</div>
                           <div className="validitdays">84 days</div>
                        </div>
                        <div className="plan-inner">
                           <div className="validity">Data</div>
                           <div className="validitdays">1.5 GB/day </div>
                        </div>
                        <div className="plan-inner">
                           <div className="validity">Voice</div>
                           <div className="validitdays">Unlimetd</div>
                        </div>
                        <div className="plan-inner">
                           <div className="validity">SMS</div>
                           <div className="validitdays">100/days</div>
                        </div>
                     </div>
                     <div className="btn">
                        <button type="button" onClick={() => navigate("/jiopayment5")}>Recharge</button>
                     </div>
                  </div>

               </div>
            </div>
<div className="last-img">
   <img src="assets/img/secure.1f30a5bf344fd3e1aa5b.png" alt="secure.1f30a5bf344fd3e1aa5b.png" />
</div>
         </div>
      </>
   )
}
export default Jio;