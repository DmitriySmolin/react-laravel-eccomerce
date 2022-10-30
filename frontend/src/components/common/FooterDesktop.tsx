import React, {Component, Fragment} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Apple from '../../assets/images/apple.png'
import Google from '../../assets/images/google.png'

const FooterDesktop = () => {
    return (
        <Fragment>
            <div className="footerback m-0 mt-5 pt-3 shadow-sm">
                <Container>
                    <Row className="px-0 my-5">
                        <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                            <h5 className="footer-menu-title">АДРЕС ОФИСА</h5>
                            <p>426008, Удмуртская Республика, город Ижевск, Пушкинская ул., д. 268<br></br>
                                Email: support@easylearningbd.com
                            </p>
                            <h5 className="footer-menu-title">СОЦИАЛЬНЫЕ СЕТИ</h5>
                            <a href=""><i className="fab m-1 h4 fa-facebook"></i></a>
                            <a href=""><i className="fab m-1 h4 fa-instagram"></i></a>
                            <a href=""><i className="fab m-1 h4 fa-twitter"></i></a>
                        </Col>
                        <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                            <h5 className="footer-menu-title">Компания</h5>
                            <Link to="/" className="footer-link">О нас</Link><br></br>
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
                            <a><img src={Google}/></a><br></br>
                            <a><img className="mt-2" src={Apple}/></a><br></br>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
                    <Container>
                        <Row>
                            <h6 className="text-white">© Copyright 2021 by easy Shop, All Rights Reserved</h6>
                        </Row>
                    </Container>
                </Container>
            </div>
        </Fragment>
    )
}
export default FooterDesktop;