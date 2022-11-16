import React, {Component, Fragment, useEffect, useState} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Apple from '../../assets/images/apple.png'
import Google from '../../assets/images/google.png'
import axios from "axios";
import AppURL from "../../api/AppURL";
import ReactHtmlParser from "react-html-parser";

const FooterDesktop = () => {

    const [address, setAddress] = useState('');
    const [androidAppLink, setAndroidAppLink] = useState('');
    const [iosAppLink, setIosAppLink] = useState('');
    const [facebookLink, setFacebookLink] = useState('');
    const [twitterLink, setTwitterLink] = useState('');
    const [instagramLink, setInstagramLink] = useState('');
    const [copyrightText, setCopyrightText] = useState('');
    const [loaderDiv, setLoaderDiv] = useState('');
    const [mainDiv, setMainDiv] = useState('d-none');

    useEffect(() => {
        axios.get(AppURL.allSiteInfo).then(response => {
            let statusCode = response.status;
            if (statusCode == 200) {
                let jsonData = (response.data)[0];
                setAddress(jsonData['address']);
                setAndroidAppLink(jsonData['android_app_link']);
                setIosAppLink(jsonData['ios_app_link']);
                setFacebookLink(jsonData['facebook_link']);
                setTwitterLink(jsonData['twitter_link']);
                setInstagramLink(jsonData['instagram_link']);
                setCopyrightText(jsonData['copyright_text']);
                setLoaderDiv('d-none');
                setMainDiv('');
            }

        }).catch(error => {

        });
    })

    return (
        <Fragment>
            <div className="footerback m-0 mt-5 pt-3 shadow-sm">
                <Container>
                    <Row className="px-0 my-5">
                        <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={mainDiv}>
                                <h5 className="footer-menu-title">АДРЕС ОФИСА</h5>
                                {ReactHtmlParser(address)}
                            </div>
                            <h5 className="footer-menu-title">СОЦИАЛЬНЫЕ СЕТИ</h5>
                            <a href={facebookLink} target="_blank"><i className="fab m-1 h4 fa-facebook"></i></a>
                            <a href={instagramLink} target="_blank"><i className="fab m-1 h4 fa-instagram"></i></a>
                            <a href={twitterLink} target="_blank"><i className="fab m-1 h4 fa-twitter"></i></a>
                        </Col>
                        <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                            <h5 className="footer-menu-title">Компания</h5>
                            <Link to="/about" className="footer-link">О нас</Link><br></br>
                            <Link to="/" className="footer-link">Портфолио</Link><br></br>
                            <Link to="/contact" className="footer-link">Контакты</Link><br></br>
                        </Col>
                        <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                            <h5 className="footer-menu-title">БОЛЬШЕ ИНФОРМАЦИИ</h5>
                            <Link to="/purchase" className="footer-link">Как приобрести</Link><br></br>
                            <Link to="/privacy" className="footer-link">Политика конфиденциальности</Link><br></br>
                            <Link to="/refund" className="footer-link">Политика возврата</Link><br></br>
                        </Col>
                        <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                            <h5 className="footer-menu-title">СКАЧАТЬ ПРИЛОЖЕНИЯ</h5>
                            <a href={androidAppLink} target="_blank"><img src={Google}/></a><br></br>
                            <a href={iosAppLink} target="_blank">
                                <img className="mt-2" src={Apple}/></a><br></br> Сменить язык
                            <br/>
                            <div id="google_translate_element"></div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
                    <Container>
                        <Row>
                            <h6 className="text-white">{ReactHtmlParser(copyrightText)}</h6>
                        </Row>
                    </Container>
                </Container>
            </div>
        </Fragment>
    )
}
export default FooterDesktop;