import React, {Fragment} from 'react';
import FeaturedProducts from "../components/home/FeaturedProducts";
import Collection from "../components/home/Collection";
import Categories from "../components/home/Categories";

const HomePage = () => {
    return (
        <Fragment>
            <FeaturedProducts/>
            <Categories/>
            <Collection/>
        </Fragment>
    );
};

export default HomePage;