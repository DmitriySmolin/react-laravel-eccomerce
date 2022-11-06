import React, {Fragment} from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from "../pages/HomePage";
import UserLoginPage from "../pages/UserLoginPage";
import PurchasePage from "../pages/PurchasePage";
import PrivacyPage from "../pages/PrivacyPage";
import RefundPage from "../pages/RefundPage";

const AppRoute = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<UserLoginPage/>}/>
                <Route path="/contact" element={<UserLoginPage/>}/>
                <Route path="/purchase" element={<PurchasePage/>}/>
                <Route path="/privacy" element={<PrivacyPage/>}/>
                <Route path="/refund" element={<RefundPage/>}/>
            </Routes>
        </Fragment>
    );
};

export default AppRoute;