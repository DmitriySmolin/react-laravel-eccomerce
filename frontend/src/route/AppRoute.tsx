import React, {Fragment} from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from "../pages/HomePage";

const AppRoute = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </Fragment>
    );
};

export default AppRoute;