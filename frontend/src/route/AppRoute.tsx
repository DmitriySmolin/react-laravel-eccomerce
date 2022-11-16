import React, {Fragment} from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from "../pages/HomePage";
import UserLoginPage from "../pages/UserLoginPage";
import PurchasePage from "../pages/PurchasePage";
import PrivacyPage from "../pages/PrivacyPage";
import RefundPage from "../pages/RefundPage";
import ProductDetails from "../components/productDetails/ProductDetails";
import NotificationPage from "../pages/NotificationPage";
import FavouritePage from "../pages/FavouritePage";
import ContactPage from "../pages/ContactPage";
import CartPage from "../pages/CartPage";
import AboutPage from "../pages/AboutPage";

const AppRoute = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<UserLoginPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/purchase" element={<PurchasePage/>}/>
                <Route path="/privacy" element={<PrivacyPage/>}/>
                <Route path="/refund" element={<RefundPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/product-details" element={<ProductDetails/>}/>
                <Route path="/notification" element={<NotificationPage/>}/>
                <Route path="/favourite" element={<FavouritePage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
            </Routes>
        </Fragment>
    );
};

export default AppRoute;