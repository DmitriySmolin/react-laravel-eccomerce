import React, {Component, Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

import axios from "axios";

import ReactHtmlParser from "react-html-parser";

import Apple from "../../assets/images/apple.png";
import Google from "../../assets/images/google.png";
import AppURL from "../../api/AppURL";

export class FooterDesktop extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
      android_app_link: "",
      ios_app_link: "",
      facbook_link: "",
      twitter_link: "",
      instagram_link: "",
      copyright_text: "",
      loaderDiv: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    axios.get(AppURL.AllSiteInfo).then(response => {
      const StatusCode = response.status;
      if (StatusCode === 200) {
        const JsonData = (response.data)[0];
        this.setState({
          address: JsonData["address"],
          android_app_link: JsonData["android_app_link"],
          ios_app_link: JsonData["ios_app_link"],
          facbook_link: JsonData["facbook_link"],
          twitter_link: JsonData["twitter_link"],
          instagram_link: JsonData["instagram_link"],
          copyright_text: JsonData["copyright_text"],
          loaderDiv: "d-none",
          mainDiv: "",
        });
      }

    }).catch(error => {

    });
  }

  render() {
    return (
      <Fragment>
        <div className="footerback m-0 mt-5 pt-3 shadow-sm">
          <Container>
            <Row className="px-0 my-5">
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <div className={this.state.loaderDiv}>
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
                <div className={this.state.mainDiv}>
                  <h5 className="footer-menu-title">АДРЕС ОФИСА</h5>
                  {ReactHtmlParser(this.state.address)}
                </div>
                <h5 className="footer-menu-title">СОЦИАЛЬНЫЕ СЕТИ</h5>
                <a href={this.state.facbook_link} target="_blank" rel="noreferrer"><i
                  className="fab m-1 h4 fa-facebook"></i></a>

                <a href={this.state.instagram_link} target="_blank" rel="noreferrer"><i
                  className="fab m-1 h4 fa-instagram"></i></a>

                <a href={this.state.twitter_link} target="_blank" rel="noreferrer"><i
                  className="fab m-1 h4 fa-twitter"></i></a>
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">Компания</h5>
                <Link to="/about" className="footer-link">О нас</Link><br></br>
                <Link to="/contact" className="footer-link">Связаться с нами</Link><br></br>
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">БОЛЬШЕ ИНФОРМАЦИИ</h5>
                <Link to="/purchase" className="footer-link">Как приобрести</Link><br></br>
                <Link to="/privacy" className="footer-link"> Политика конфиденциальности</Link><br></br>
                <Link to="/refund" className="footer-link"> Политика возврата </Link><br></br>
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">СКАЧАТЬ ПРИЛОЖЕНИЕ</h5>
                <a href={this.state.android_app_link} target="_blank" rel="noreferrer">
                  <img src={Google} alt="img"/>
                </a><br></br>
                <a href={this.state.ios_app_link} target="_blank" rel="noreferrer">
                  <img className="mt-2" src={Apple} alt="img"/></a><br></br>
                                Сменить язык <br></br>
                <div id="google_translate_element"></div>
              </Col>
            </Row>
          </Container>
          <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
            <Container>
              <Row>
                <h6 className="text-white"> {ReactHtmlParser(this.state.copyright_text)}  </h6>
              </Row>
            </Container>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default FooterDesktop;