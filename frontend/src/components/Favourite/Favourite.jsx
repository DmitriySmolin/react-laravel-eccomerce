import React, {Component, Fragment} from "react";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import axios from "axios";
import cogoToast from "cogo-toast";

import {Redirect} from "react-router-dom";

import AppURL from "../../api/AppURL";

class Favourite extends Component {
  constructor() {
    super();
    this.state = {
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none",
      PageRefreshStatus: false,

    };
  }


  componentDidMount() {
    window.scroll(0, 0);
    axios.get(AppURL.FavouriteList(this.props.user.email)).then(response => {
      this.setState({
        ProductData: response.data,
        isLoading: "d-none",
        mainDiv: " ",
      });

    }
    ).catch(error => {

    });
  }

  removeItem = (event) => {
    const product_code = event.target.getAttribute("data-code");
    const email = this.props.user.email;

    axios.get(AppURL.FavouriteRemove(product_code, email)).then(response => {
      cogoToast.success("Товар удален", {position: "top-right"});
      this.setState({PageRefreshStatus: true});

    }).catch(error => {
      cogoToast.error("Ваш запрос не выполнен! Попробуйте еще раз", {position: "top-right"});
    });

  }; // end Remove Item Mehtod


  PageRefresh = () => {
    if (this.state.PageRefreshStatus === true) {
      const URL = window.location;
      return (
        <Redirect to={URL}/>
      );
    }
  };

  render() {

    if (!localStorage.getItem("token")) {
      return <Redirect to="/login"/>;
    }

    const FevList = this.state.ProductData;
    const MyView = FevList.map((ProductList, i) => {
      return <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
        <Card className="image-box card w-100">
          <img className="center w-75" src={ProductList.image} alt=""/>
          <Card.Body>
            <p className="product-name-on-card">{ProductList.product_name}</p>
            <Button onClick={this.removeItem} data-code={ProductList.product_code} className="btn btn-sm">
              <i className="fa fa-trash-alt"></i> Удалить </Button>
          </Card.Body>
        </Card>
      </Col>;
    });

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2> Избранное</h2>
            <p>Эксклюзивная коллекция, которая может вам понравиться</p>
          </div>
          <Row>
            {MyView}
          </Row>
        </Container>
        {this.PageRefresh()}
      </Fragment>
    );
  }
}

export default Favourite;
