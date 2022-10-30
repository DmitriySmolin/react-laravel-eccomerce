import React, {Fragment} from 'react';
import FeaturedProducts from "../components/home/FeaturedProducts";
import Collection from "../components/home/Collection";
import Categories from "../components/home/Categories";
import NewArrival from "../components/home/NewArrival";
import HomeTop from "../components/home/HomeTop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";

const HomePage = () => {
    return (
        <Fragment>
            <NavMenuDesktop/>
            <HomeTop/>
            <FeaturedProducts/>
            <NewArrival/>
            <Collection/>
            <Categories/>
        </Fragment>
    );
};

export default HomePage;