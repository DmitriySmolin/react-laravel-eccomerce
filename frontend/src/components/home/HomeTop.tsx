import React, {Fragment, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import HomeSlider from "./HomeSlider";
import axios from "axios";
import AppURL from "../../api/AppURL";

const HomeTop = () => {

    const [menuData, setMenuData] = useState([]);
    const [sliderData, setSliderData] = useState([]);
    const [isLoading, setIsLoading] = useState('');
    const [mainDiv, setMainDiv] = useState('d-none');

    useEffect(() => {
        axios.get(AppURL.allCategoryDetails).then(response => {
            setMenuData(response.data);
        }).catch(error => {

        });

        axios.get(AppURL.allSlider).then(response => {
            setSliderData(response.data);
            setIsLoading('d-none');
            setMainDiv('');
        }).catch(error => {

        });
    }, [])

    return (
        <Fragment>
            <Container className="p-0 m-0 overflow-hidden" fluid={true}>
                <Row>
                    <Col lg={3} md={3} sm={12}>
                        <MegaMenu data={menuData}/>
                    </Col>
                    <Col lg={9} md={9} sm={12}>
                        <HomeSlider/>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default HomeTop;