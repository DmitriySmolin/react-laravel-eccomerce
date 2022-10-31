import React, {Fragment} from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from "../pages/HomePage";
import UserLoginPage from "../pages/UserLoginPage";

const AppRoute = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<UserLoginPage/>}/>
            </Routes>
        </Fragment>
    );
};

export default AppRoute;