import React, {Fragment, useState} from 'react';
import {Button, Col, Container, Navbar, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Logo from "../../assets/images/easyshop.png";
import MegaMenuMobile from "../home/MegaMenuMobile";

const NavMenuMobile = () => {

    const [sideNavState, setSideNavState] = useState('sideNavClose');
    const [contentOverState, setContentOverState] = useState('contentOverlayClose');

    const sideNavOpenClose = () => {
        if (sideNavState === "sideNavOpen") {
            setSideNavState("sideNavClose");
            setContentOverState("contentOverlayClose");
        } else {
            setSideNavState("sideNavOpen");
            setContentOverState("contentOverlayOpen");
        }
    }

    const menuBarClickHandler = () => {
        sideNavOpenClose();
    }

    const contentOverlayClickHandler = () => {
        sideNavOpenClose();
    }

    return (
        <Fragment>
            <div className="TopSectionDown">
                <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
                    <Row>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <Button onClick={menuBarClickHandler} className="btn">
                                <i className="fa fa-bars"></i>
                            </Button>
                            <Link to="/"> <img className="nav-logo" src={Logo}/> </Link>
                            <Button className="cart-btn"><i className="fa fa-shopping-cart"></i> 3 Items </Button>
                        </Col>
                    </Row>
                </Container>
                <div className={sideNavState}>
                    <MegaMenuMobile/>
                </div>
                <div onClick={contentOverlayClickHandler} className={contentOverState}>
                </div>
            </div>
        </Fragment>
    );
};

export default NavMenuMobile;