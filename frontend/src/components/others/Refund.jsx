import React, {Component, Fragment} from "react";
import {Container, Row, Col} from "react-bootstrap";

import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import {Link} from "react-router-dom";

import AppURL from "../../api/AppURL";

class Refund extends Component {

  constructor() {
    super();
    this.state = {
      refund: "",
      loaderDiv: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    axios.get(AppURL.AllSiteInfo).then(response => {
      const StatusCode = response.status;
      if (StatusCode === 200) {
        const JsonData = (response.data)[0]["refund"];
        this.setState({refund: JsonData, loaderDiv: "d-none", mainDiv: ""});
      }

    }).catch(error => {

    });
  }

  render() {
    return (
      <Fragment>
        <Container>

          <div className="breadbody">
            <Breadcrumb>
              <Breadcrumb.Item> <Link to="/"> Главная </Link> </Breadcrumb.Item>
              <Breadcrumb.Item> <Link to="/refund"> Возврат </Link> </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
              <div className={this.state.loaderDiv}>
                <div class="ph-item">
                  <div class="ph-col-12">
                    <div class="ph-row">
                      <div class="ph-col-4"></div>
                      <div class="ph-col-8 empty"></div>
                      <div class="ph-col-6"></div>
                      <div class="ph-col-6 empty"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                    </div>
                  </div>
                </div>
                <div class="ph-item">
                  <div class="ph-col-12">
                    <div class="ph-row">
                      <div class="ph-col-4"></div>
                      <div class="ph-col-8 empty"></div>
                      <div class="ph-col-6"></div>
                      <div class="ph-col-6 empty"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={this.state.mainDiv}>
                <h4 className="section-title-login">Политика возврата</h4>
                <p className="section-title-contact">
                  {ReactHtmlParser(this.state.refund)}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Refund;