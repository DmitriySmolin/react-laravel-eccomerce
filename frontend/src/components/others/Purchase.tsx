import React, {Component, Fragment, useEffect, useState} from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import AppURL from '../../api/AppURL';
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Purchase = () => {

    const [purchase, setPurchase] = useState('');
    const [loaderDiv, setLoaderDiv] = useState('');
    const [mainDiv, setMainDiv] = useState('d-none');

    useEffect(() => {

            let siteInfoPurchase = sessionStorage.getItem("allSiteInfo");

            if (!siteInfoPurchase) {

                axios.get(AppURL.allSiteInfo).then(res => {
                    let statusCode = res.status;
                    if (statusCode == 200) {
                        let jsonData = (res.data)[0]['parchase_guide'];
                        setPurchase(jsonData);
                        setLoaderDiv('d-none');
                        setMainDiv('');
                        sessionStorage.setItem("siteInfoPurchase", jsonData)
                    } else {
                        toast.error("Что-то пошло не так...", {
                            position: "bottom-center"
                        });
                    }

                }).catch(error => {
                    toast.error("Что-то пошло не так...", {
                        position: "bottom-center"
                    });
                });

            }  // end If Conditon
            else {
                setPurchase(siteInfoPurchase);
                setLoaderDiv('d-none');
                setMainDiv('');
            }
        }, []);

    return (
        <Fragment>
            <Container>
                <Row className="p-2">
                    <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                        <div className={loaderDiv}>
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-4"></div>
                                        <div className="ph-col-8 empty"></div>
                                        <div className="ph-col-6"></div>
                                        <div className="ph-col-6 empty"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-4"></div>
                                        <div className="ph-col-8 empty"></div>
                                        <div className="ph-col-6"></div>
                                        <div className="ph-col-6 empty"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={mainDiv}>
                            <h4 className="section-title-login">Purchase Page </h4>
                            <p className="section-title-contact">
                                {ReactHtmlParser(purchase)}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <ToastContainer/>
        </Fragment>
    )
}

export default Purchase
