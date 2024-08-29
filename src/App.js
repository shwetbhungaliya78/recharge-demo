import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Jio from "./jio";
import Airtel from "./Airtel";
import We from "./We";
import Bsnl from "./Bsnal";
import Jiopaymet1 from "./jiopaymet1";
import Jiopaymet2 from "./jiopaymet2";
import Jiopaymet3 from "./jiopaymet3";
import Jiopaymet4 from "./jiopaymet4";
import Jiopaymet5 from "./jiopaymet5";

const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header/>} />
                    <Route path="/jio"  element={<Jio/>} />
                    <Route path="/airtel" element={<Airtel/>} />
                    <Route path="/we" element={<We/>} />
                    <Route path="/bsnl" element={<Bsnl/>} />
                    <Route path="/jiopayment" element={<Jiopaymet1/>} />
                    <Route path="/jiopayment2" element={<Jiopaymet2/>} />
                    <Route path="/jiopayment3" element={<Jiopaymet3/>} />
                    <Route path="/jiopayment4" element={<Jiopaymet4/>} />
                    <Route path="/jiopayment5" element={<Jiopaymet5/>} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}
export default App;