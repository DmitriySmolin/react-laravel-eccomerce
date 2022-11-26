import React, {Component, Fragment} from "react";
import {Container, Row, Col} from "react-bootstrap";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import {Link} from "react-router-dom";

import AppURL from "../../api/AppURL";

export class Purchase extends Component {
  constructor() {
    super();
    this.state = {
      purchase: "",
      loaderDiv: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {

    const SiteInfoPurchase = sessionStorage.getItem("AllSiteInfo");

    if (SiteInfoPurchase == null) {

      axios.get(AppURL.AllSiteInfo).then(response => {
        const StatusCode = response.status;
        if (StatusCode === 200) {
          const JsonData = (response.data)[0]["parchase_guide"];
          this.setState({purchase: JsonData, loaderDiv: "d-none", mainDiv: ""});

          sessionStorage.setItem("SiteInfoPurchase", JsonData);
        } else {
          toast.error("Что-то пошло не так", {
            position: "bottom-center",
          });
        }


      }).catch(error => {
        toast.error("Что-то пошло не так", {
          position: "bottom-center",
        });
      });

    }  // end If Conditon
    else {
      this.setState({purchase: SiteInfoPurchase, loaderDiv: "d-none", mainDiv: ""});
    }

  }

  render() {
    return (
      <Fragment>
        <Container>

          <div className="breadbody">
            <Breadcrumb>
              <Breadcrumb.Item> <Link to="/"> Главная </Link> </Breadcrumb.Item>
              <Breadcrumb.Item> <Link to="/purchase"> Как приобрести </Link> </Breadcrumb.Item>
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
                <h4 className="section-title-login">Соглашение о приобритение товаров</h4>
                <p className="section-title-contact">
                  {ReactHtmlParser(this.state.purchase)}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <ToastContainer/>
      </Fragment>
    );
  }
}

export default Purchase;
