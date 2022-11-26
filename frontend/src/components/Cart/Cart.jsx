import React, {Component, Fragment} from "react";
import {Container, Row, Col, Button, Card} from "react-bootstrap";
import axios from "axios";
import cogoToast from "cogo-toast";
import { Redirect } from "react-router-dom";

import AppURL from "../../api/AppURL";

class Cart extends Component {

  constructor() {
    super();
    this.state = {
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none",
      PageRefreshStatus: false,
      PageRedirectStatus: false,
      confirmBtn: "Подтвердите заказ",
      city: "",
      payment: "",
      name: "",
      address: "",

    };
  }

  componentDidMount() {
    axios.get(AppURL.CartList(this.props.user.email)).then(response => {

      this.setState({
        ProductData: response.data, isLoading: "d-none",
        mainDiv: " ",
      });

    }).catch(error => {

    });
  }

  removeItem = (id) => {

    axios.get(AppURL.RemoveCartList(id)).then(response => {

      if (response.data === 1) {
        cogoToast.success("Товар из корзины успешно удален", {position: "top-right"});
        this.setState({PageRefreshStatus: true});
      } else {
        cogoToast.error("Ваш запрос не выполнен! Попробуйте еще раз", {position: "top-right"});
      }
    }).catch(error => {
      cogoToast.error("Ваш запрос не выполнен! Попробуйте еще раз", {position: "top-right"});

    });

  }; // End Remove Item Mehtod

  PageRefresh = () => {
    if (this.state.PageRefreshStatus === true) {
      const URL = window.location;
      return (
        <Redirect to={URL} />
      );
    }
  };

  ItemPlus = (id, quantity, price) => {

    axios.get(AppURL.CartItemPlus(id, quantity, price)).then(response => {

      if (response.data === 1) {
        cogoToast.success("Количество товаров увеличено!", {position: "top-right"});
        this.setState({PageRefreshStatus: true});
      } else {
        cogoToast.error("Ваш запрос не выполнен! Попробуйте еще раз", {position: "top-right"});
      }
    }).catch(error => {
      cogoToast.error("Ваш запрос не выполнен! Попробуйте еще раз", {position: "top-right"});

    });

  }; // End ItemPlus Mehtod


  ItemMinus = (id, quantity, price) => {

    axios.get(AppURL.CartItemMinus(id, quantity, price)).then(response => {

      if (response.data === 1) {
        cogoToast.success("Количество товаров уменьшено!", {position: "top-right"});
        this.setState({PageRefreshStatus: true});
      } else {
        cogoToast.error("Ваш запрос не выполнен! Попробуйте еще раз", {position: "top-right"});
      }
    }).catch(error => {
      cogoToast.error("Ваш запрос не выполнен! Попробуйте еще раз", {position: "top-right"});

    });

  }; // End ItemMinus Mehtod


  cityOnChange = (event) => {
    const city = event.target.value;
    this.setState({city: city});
  };

  paymentMethodOnChange = (event) => {
    const payment = event.target.value;
    this.setState({payment: payment});
  };

  nameOnChange = (event) => {
    const name = event.target.value;
    this.setState({name: name});
  };

  addressOnChange = (event) => {
    const address = event.target.value;
    this.setState({address: address});
  };

  confirmOnClick = () => {
    const city = this.state.city;
    const payment = this.state.payment;
    const name = this.state.name;
    const address = this.state.address;
    const email = this.props.user.email;

    if (city.length === 0) {
      cogoToast.error("Пожалуйста, выберите город", {position: "top-right"});
    } else if (payment.length === 0) {
      cogoToast.error("Пожалуйста, выберите платеж", {position: "top-right"});
    } else if (name.length === 0) {
      cogoToast.error("Пожалуйста, выберите ваше имя", {position: "top-right"});
    } else if (address.length === 0) {
      cogoToast.error("Пожалуйста, выберите ваш адрес", {position: "top-right"});
    } else {

      const invoice = new Date().getTime();
      const MyFromData = new FormData();
      MyFromData.append("city", city);
      MyFromData.append("payment_method", payment);
      MyFromData.append("name", name);
      MyFromData.append("delivery_address", address);
      MyFromData.append("email", email);
      MyFromData.append("invoice_no", invoice);
      MyFromData.append("delivery_charge", "00");

      axios.post(AppURL.CartOrder, MyFromData).then(response => {

        if (response.data === 1) {
          cogoToast.success("Запрос заказа получен", {position: "top-right"});
          this.setState({PageRedirectStatus: true});
        } else {
          cogoToast.error("Ваш запрос не выполнен! Попробуйте еще раз", {position: "top-right"});
        }
      }).catch(error => {
        cogoToast.error("Ваш запрос не выполнен! Попробуйте еще раз", {position: "top-right"});

      });
    }

  }; // edn confim order method


  PageRedirect = () => {
    if (this.state.PageRedirectStatus === true) {
      return (
        <Redirect to="/orderlist" />
      );
    }
  };

  render() {
    if (!localStorage.getItem("token")) {
      return <Redirect to="/login" />;
    }
    const MyList = this.state.ProductData;
    let totalPriceSum = 0;
    const MyView = MyList.map((ProductList, i) => {
      totalPriceSum = totalPriceSum + parseInt(ProductList.total_price);
      return <div>
        <Card>
          <Card.Body>
            <Row>
              <Col md={3} lg={3} sm={6} xs={6}>
                <img className="cart-product-img" src={ProductList.image} alt=""/>
              </Col>

              <Col md={6} lg={6} sm={6} xs={6}>
                <h5 className="product-name">{ProductList.product_name}</h5>
                <h6> Quantity = {ProductList.quantity} </h6>
                <p>{ProductList.size} | {ProductList.color}</p>
                <h6>
                Price = {ProductList.unit_price} x {ProductList.quantity} = {ProductList.total_price}₽
                </h6>
              </Col>
              <Col md={3} lg={3} sm={12} xs={12}>

                <Button onClick={() => this.removeItem(ProductList.id)}
                  className="btn mt-2 mx-1 btn-lg site-btn"><i className="fa fa-trash-alt"></i>
                </Button>

                <Button
                  onClick={() => this.ItemPlus(ProductList.id, ProductList.quantity, ProductList.unit_price)}
                  className="btn mt-2 mx-1 btn-lg site-btn"><i className="fa fa-plus"></i> </Button>

                <Button
                  onClick={() => this.ItemMinus(ProductList.id, ProductList.quantity, ProductList.unit_price)}
                  className="btn mt-2 mx-1 btn-lg site-btn"><i className="fa fa-minus"></i> </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>;
    });
    return (
      <Fragment>
        <Container fluid={true}>
          <div className="section-title text-center mb-55"><h2>Список корзины товаров</h2>
          </div>
          <Row>
            <Col className="p-1" lg={7} md={7} sm={12} xs={12}>
              {MyView}
            </Col>
            <Col className="p-1" lg={5} md={5} sm={12} xs={12}>
              <div className="card p-2">
                <div className="card-body">
                  <div className="container-fluid ">
                    <div className="row">
                      <div className="col-md-12 p-1  col-lg-12 col-sm-12 col-12">
                        <h5 className="Product-Name text-danger">Сумма
                                                    заказа: {totalPriceSum}₽</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                        <label className="form-label">Выбрать город</label>
                        <select onChange={this.cityOnChange} className="form-control">
                          <option value="">Выбрать</option>
                          <option value="Москва">Москва</option>
                          <option value="Санкт-Петербург">Санкт-Петербург</option>
                          <option value="Казань">Казань</option>
                          <option value="Ижевск">Ижевск</option>
                          <option value="Челябинск">Челябинск</option>
                          <option value="Екатеринбург">Екатеринбург</option>
                        </select>
                      </div>
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                        <label className="form-label">Выберите способ оплаты</label>
                        <select onChange={this.paymentMethodOnChange} className="form-control">
                          <option value="">Выбрать</option>
                          <option value="Оплата при доставке">Оплата при доставке</option>
                          <option value="Оплатить сразу">Оплатить сразу</option>
                        </select>
                      </div>
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                        <label className="form-label">Ваше имя</label>
                        <input onChange={this.nameOnChange} className="form-control" type="text"
                          placeholder=""/>
                      </div>
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                        <label className="form-label">Адрес доставки</label>
                        <textarea onChange={this.addressOnChange} rows={2}
                          className="form-control" type="text" placeholder=""/>
                      </div>
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                        <button onClick={this.confirmOnClick}
                          className="btn  site-btn"> {this.state.confirmBtn} </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {this.PageRefresh()}
        {this.PageRedirect()}
      </Fragment>
    );
  }
}

export default Cart;
