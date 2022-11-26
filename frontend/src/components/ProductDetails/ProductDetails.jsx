import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Link, Redirect} from 'react-router-dom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

import InnerImageZoom from 'react-inner-image-zoom';

import cogoToast from 'cogo-toast';
import axios from 'axios';

import AppURL from '../../api/AppURL';

import ReviewList from './ReviewList';
import SuggestedProduct from './SuggestedProduct';

class ProductDetails extends Component {

    constructor() {
        super();
        this.state = {
            previewImg: "0",
            isSize: null,
            isColor: null,
            color: "",
            size: "",
            quantity: "",
            productCode: null,
            addToCart: "Добавить в корзину",
            PageRefreshStatus: false,
            addToFav: "В избранное",
            OrderNow: "Заказать сейчас",
            PageRedirectStauts: false,
        };
    }

    imgOnClick = (event) => {
        const imgSrc = event.target.getAttribute('src');
        this.setState({previewImg: imgSrc});
    };


    addToCart = () => {

        const isSize = this.state.isSize;
        const isColor = this.state.isColor;
        const color = this.state.color;
        const size = this.state.size;
        const quantity = this.state.quantity;
        const productCode = this.state.productCode;
        const email = this.props.user.email;

        if (isColor === "YES" && color.length === 0) {
            cogoToast.error('Пожалуйста выберите цвет', {position: 'top-right'});
        } else if (isSize === "YES" && size.length === 0) {
            cogoToast.error('Пожалуйста выберите размер', {position: 'top-right'});
        } else if (quantity.length === 0) {
            cogoToast.error('Пожалуйста выберите количество', {position: 'top-right'});
        } else if (!localStorage.getItem('token')) {
            cogoToast.warn('Пожалуйста, сначала авторизуйтесь', {position: 'top-right'});
        } else {
            this.setState({addToCart: "Добавление..."});
            const MyFormData = new FormData();
            MyFormData.append("color", color);
            MyFormData.append("size", size);
            MyFormData.append("quantity", quantity);
            MyFormData.append("product_code", productCode);
            MyFormData.append("email", email);

            axios.post(AppURL.addToCart, MyFormData).then(response => {
                if (response.data === 1) {
                    cogoToast.success("Товар успешно добавлен", {position: 'top-right'});
                    this.setState({addToCart: "Добавить в корзину"});
                    this.setState({PageRefreshStatus: true});
                } else {
                    cogoToast.error("Ваш запрос не выполнен! Попробуйте еще раз", {position: 'top-right'});
                    this.setState({addToCart: "Добавить в корзину"});
                }

            }).catch(error => {
                cogoToast.error("Ваш запрос не выполнен! Попробуйте еще раз", {position: 'top-right'});
                this.setState({addToCart: "Добавить в корзину"});

            });

        }


    };  /// End addToCart Mehtod


    orderNow = () => {

        const isSize = this.state.isSize;
        const isColor = this.state.isColor;
        const color = this.state.color;
        const size = this.state.size;
        const quantity = this.state.quantity;
        const productCode = this.state.productCode;
        const email = this.props.user.email;

        if (isColor === "YES" && color.length === 0) {
            cogoToast.error('Пожалуйста выберите цвет', {position: 'top-right'});
        } else if (isSize === "YES" && size.length === 0) {
            cogoToast.error('Пожалуйста выберите размер', {position: 'top-right'});
        } else if (quantity.length === 0) {
            cogoToast.error('Пожалуйста выберите количество', {position: 'top-right'});
        } else if (!localStorage.getItem('token')) {
            cogoToast.warn('Пожалуйста, сначала авторизуйтесь', {position: 'top-right'});
        } else {
            this.setState({addToCart: "Добавление..."});
            const MyFormData = new FormData();
            MyFormData.append("color", color);
            MyFormData.append("size", size);
            MyFormData.append("quantity", quantity);
            MyFormData.append("product_code", productCode);
            MyFormData.append("email", email);

            axios.post(AppURL.addToCart, MyFormData).then(response => {
                if (response.data === 1) {
                    cogoToast.success("Товар успешно добавлен", {position: 'top-right'});
                    this.setState({OrderNow: "Заказать сейчас"});
                    this.setState({PageRedirectStauts: true});
                } else {
                    cogoToast.error("Ваш запрос не выполнен! Попробуйте еще раз", {position: 'top-right'});
                    this.setState({addToCart: "Добавить в корзину"});
                }

            }).catch(error => {
                cogoToast.error("Ваш запрос не выполнен! Попробуйте еще раз", {position: 'top-right'});
                this.setState({addToCart: "Добавить в корзину"});

            });

        }


    };  /// End orderNow Mehtod


    PageRedirect = () => {
        if (this.state.PageRedirectStauts === true) {

            return (
                <Redirect to="/cart"/>
            );
        }
    };


    addToFav = () => {
        this.setState({addToFav: "Добавление..."});
        const productCode = this.state.productCode;
        const email = this.props.user.email;

        if (!localStorage.getItem('token')) {
            cogoToast.warn('Пожалуйста, сначала авторизуйтесь', {position: 'top-right'});
        } else {

            axios.get(AppURL.AddFavourite(productCode, email)).then(response => {
                if (response.data === 1) {
                    cogoToast.success("Продукт добавлен в избранное", {position: 'top-right'});
                    this.setState({addToFav: "В избранное"});

                } else {
                    cogoToast.error("Ваш запрос не выполнен! Попробуйте еще раз", {position: 'top-right'});
                    this.setState({addToFav: "В избранное"});
                }

            }).catch(error => {
                cogoToast.error("Ваш запрос не выполнен! Попробуйте еще раз", {position: 'top-right'});
                this.setState({addToFav: "В избранное"});

            });

        }

    };  // end ADD TO FAV


    colorOnChange = (event) => {
        const color = event.target.value;
        // alert(color);
        this.setState({color: color});
    };

    sizeOnChange = (event) => {
        const size = event.target.value;
        // alert(size);
        this.setState({size: size});
    };

    quantityOnChange = (event) => {
        const quantity = event.target.value;
        this.setState({quantity: quantity});
    };

    PageRefresh = () => {
        if (this.state.PageRefreshStatus === true) {
            const URL = window.location;
            return (
                <Redirect to={URL}/>
            );
        }
    };


    PriceOption(price, special_price) {
        if (special_price == "na") {
            return (
                <p className="product-price-on-card"> Price : {price}₽ </p>
            );
        } else {

            return (
                <p className="product-price-on-card">
                    Price : <strike className="text-secondary">{price}₽ </strike> {special_price}₽
                </p>
            );

        }
    }


    render() {

        const ProductAllData = this.props.data;
        const title = ProductAllData['productList'][0]['title'];
        const brand = ProductAllData['productList'][0]['brand'];
        const category = ProductAllData['productList'][0]['category'];
        const subcategory = ProductAllData['productList'][0]['subcategory'];
        const image = ProductAllData['productList'][0]['image'];

        if (this.state.previewImg === "0") {
            this.setState({previewImg: image});
        }

        const price = ProductAllData['productList'][0]['price'];
        const product_code = ProductAllData['productList'][0]['product_code'];
        const remark = ProductAllData['productList'][0]['remark'];
        const special_price = ProductAllData['productList'][0]['special_price'];
        const star = ProductAllData['productList'][0]['star'];


        const image_one = ProductAllData['productDetails'][0]['image_one'];
        const image_two = ProductAllData['productDetails'][0]['image_two'];
        const image_three = ProductAllData['productDetails'][0]['image_three'];
        const image_four = ProductAllData['productDetails'][0]['image_four'];
        const color = ProductAllData['productDetails'][0]['color'];
        const size = ProductAllData['productDetails'][0]['size'];

        const product_id = ProductAllData['productDetails'][0]['product_id'];
        const short_description = ProductAllData['productDetails'][0]['short_description'];
        const long_description = ProductAllData['productDetails'][0]['long_description'];


        var ColorDiv = "d-none";
        if (color != "na") {
            const ColorArray = color.split(',');
            var ColorOption = ColorArray.map((ColorList, i) => {
                return <option value={ColorList}> {ColorList} </option>;
            });
            ColorDiv = "";
        } else {
            ColorDiv = "d-none";
        }


        var SizeDiv = "d-none";
        if (size != "na") {
            const SizeArray = size.split(',');
            var SizeOption = SizeArray.map((SizeList, i) => {
                return <option value={SizeList}> {SizeList} </option>;
            });
            SizeDiv = "";
        } else {
            SizeDiv = "d-none";
        }


        if (this.state.isSize === null) {
            if (size != "na") {
                this.setState({isSize: "YES"});
            } else {
                this.setState({isSize: "NO"});
            }
        }


        if (this.state.isColor === null) {
            if (color != "na") {
                this.setState({isColor: "YES"});
            } else {
                this.setState({isColor: "NO"});
            }
        }


        if (this.state.productCode === null) {
            this.setState({productCode: product_code});
        }


        return (
            <Fragment>
                <Container fluid={true} className="BetweenTwoSection">

                    <div className="breadbody">
                        <Breadcrumb>
                            <Breadcrumb.Item> <Link to="/"> Home </Link> </Breadcrumb.Item>

                            <Breadcrumb.Item> <Link to={"/productcategory/" + category}> {category} </Link>
                            </Breadcrumb.Item>

                            <Breadcrumb.Item> <Link
                                to={"/productsubcategory/" + category + "/" + subcategory}> {subcategory} </Link>
                            </Breadcrumb.Item>

                            <Breadcrumb.Item> <Link to={"/productdetails/" + product_id}> {title} </Link>
                            </Breadcrumb.Item>

                        </Breadcrumb>
                    </div>


                    <Row className="p-2">
                        <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
                            <Row>
                                <Col className="p-3" md={6} lg={6} sm={12} xs={12}>


                                    <InnerImageZoom className="detailimage" zoomScale={1.8} zoomType={"hover"}
                                                    src={this.state.previewImg} zoomSrc={this.state.previewImg}/>


                                    <Container className="my-3">
                                        <Row>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imgOnClick}
                                                     className="w-100 smallimage product-sm-img" src={image_one}/>
                                            </Col>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imgOnClick}
                                                     className="w-100 smallimage product-sm-img" src={image_two}/>
                                            </Col>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imgOnClick}
                                                     className="w-100 smallimage product-sm-img" src={image_three}/>
                                            </Col>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imgOnClick}
                                                     className="w-100 smallimage product-sm-img" src={image_four}/>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                                    <h5 className="Product-Name"> {title} </h5>
                                    <h6 className="section-sub-title"> {short_description} </h6>


                                    {this.PriceOption(price, special_price)}


                                    <h6 className="mt-2">Категория : <b>{category}</b></h6>

                                    <h6 className="mt-2">Подкатегория : <b>{subcategory}</b></h6>

                                    <h6 className="mt-2">Бренд : <b>{brand}</b></h6>

                                    <h6 className="mt-2">Код товара : <b>{product_code}</b></h6>


                                    <div className={ColorDiv}>
                                        <h6 className="mt-2"> Выберите цвет </h6>
                                        <select onChange={this.colorOnChange} className="form-control form-select">
                                            <option>Выберите цвет</option>
                                            {ColorOption}
                                        </select>
                                    </div>


                                    <div className={SizeDiv}>
                                        <h6 className="mt-2"> Выберите размер </h6>
                                        <select onChange={this.sizeOnChange} className="form-control form-select">
                                            <option>Выберите размер</option>
                                            {SizeOption}
                                        </select>
                                    </div>

                                    <div className="">
                                        <h6 className="mt-2"> Выберите количество </h6>
                                        <select onChange={this.quantityOnChange} className="form-control form-select">
                                            <option>Choose Quantity</option>
                                            <option value="1">1</option>
                                            <option value="2">22</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>


                                    <div className="input-group mt-3">
                                        <button onClick={this.addToCart} className="btn site-btn m-1 "><i
                                            className="fa fa-shopping-cart"></i> {this.state.addToCart} </button>
                                        <button onClick={this.orderNow} className="btn btn-primary m-1"><i
                                            className="fa fa-car"></i> {this.state.OrderNow} </button>
                                        <button onClick={this.addToFav} className="btn btn-primary m-1"><i
                                            className="fa fa-heart"></i> {this.state.addToFav} </button>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="" md={6} lg={6} sm={12} xs={12}>
                                    <h6 className="mt-2">Детали</h6>
                                    <p> {long_description} </p>
                                </Col>
                                <Col className="" md={6} lg={6} sm={12} xs={12}>
                                    <ReviewList code={product_code}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

                <SuggestedProduct subcategory={subcategory}/>

                {this.PageRefresh()}

                {this.PageRedirect()}

            </Fragment>
        );
    }
}

export default ProductDetails;
