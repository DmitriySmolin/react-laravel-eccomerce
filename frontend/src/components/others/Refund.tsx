import React, {Component, Fragment, useEffect, useState} from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import AppURL from '../../api/AppURL';
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser';

const Refund = () => {

    const [refund, setRefund] = useState('');
    const [loaderDiv, setLoaderDiv] = useState('');
    const [mainDiv, setMainDiv] = useState('d-none');

    useEffect(() => {
            axios.get(AppURL.allSiteInfo).then(response => {
                let statusCode = response.status;
                if (statusCode == 200) {
                    let jsonData = (response.data)[0]['refund'];
                    setRefund(jsonData);
                    setLoaderDiv('d-none');
                    setMainDiv('');
                }
            }).catch(error => {
            })
        }
        , [])

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
                            <h4 className="section-title-login">Refund Page </h4>
                            <p className="section-title-contact">
                                {ReactHtmlParser(refund)}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Refund
