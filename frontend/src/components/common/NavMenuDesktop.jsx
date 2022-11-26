import React, {Component, Fragment} from "react";
import {Navbar, Container, Row, Col, Button} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import axios from "axios";

import Logo from "../../assets/images/easyshop.png";
import Bars from "../../assets/images/bars.png";
import MegaMenuAll from "../home/MegaMenuAll";
import AppURL from "../../api/AppURL";

class NavMenuDesktop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      SideNavState: "sideNavClose",
      ContentOverState: "ContentOverlayClose",
      Searchkey: "",
      SearchRedirectStatus: false,
      cartCount: 0,
    };
    this.SearchOnChange = this.SearchOnChange.bind(this);
    this.SeachOnClick = this.SeachOnClick.bind(this);
    this.searchRedirect = this.searchRedirect.bind(this);
  }

  componentDidMount() {
    const product_code = this.props.product_code;
    axios.get(AppURL.CartCount(product_code)).then((response) => {
      this.setState({cartCount: response.data});

    });
    // axios.get(AppURL.FavouriteList(this.props.user.email)).then(response => {
    //         console.log(response)
    // });
    console.log(this.props.user);
  }

  logout = () => {
    localStorage.clear();
  };

  SearchOnChange(event) {
    const Searchkey = event.target.value;
    // alert(Searchkey);
    this.setState({Searchkey: Searchkey});
  }

  SeachOnClick() {
    if (this.state.Searchkey.length >= 2) {
      this.setState({SearchRedirectStatus: true});
    }
  }

  searchRedirect() {
    if (this.state.SearchRedirectStatus === true) {
      return <Redirect to={"/productbysearch/" + this.state.Searchkey}/>;
    }
  }

  MenuBarClickHandler = () => {
    this.SideNavOpenClose();
  };

  ContentOverlayClickHandler = () => {
    this.SideNavOpenClose();
  };


  SideNavOpenClose = () => {
    const SideNavState = this.state.SideNavState;
    if (SideNavState === "sideNavOpen") {
      this.setState({SideNavState: "sideNavClose", ContentOverState: "ContentOverlayClose"});

    } else {
      this.setState({SideNavState: "sideNavOpen", ContentOverState: "ContentOverlayOpen"});
    }
  };


  render() {
    let buttons;
    if (localStorage.getItem("token")) {
      buttons = (
        <div>

          <Link to="/about" className="h4 btn">О нас</Link>
          <Link to="/contact" className="h4 btn">Контакты</Link>
          <Link to="/profile" className="h4 btn">Профиль</Link>
          <Link to="/" onClick={this.logout} className="h4 btn">Выйти</Link>
          <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"> <span className="badge text-white bg-danger">3</span> </i><sup><span
            className="badge text-white bg-danger"></span></sup>
          </Link>
          <Link to="/cart" className="cart-btn"><i
            className="fa fa-shopping-cart"></i> {this.state.cartCount} Товары </Link>
        </div>
      );

    } else {
      buttons = (
        <div>
          <Link to="/about" className="h4 btn">О нас</Link>
          <Link to="/contact" className="h4 btn">Контакты</Link>
          <Link to="/login" className="h4 btn">Авторизация</Link>
          <Link to="/register" className="h4 btn">Регистрация</Link>
        </div>
      );
    }
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Navbar fixed={"top"} className="navbar" bg="light">
            <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
              <Row>
                <Col lg={3} md={4} sm={12} xs={12}>
                  <img onClick={this.MenuBarClickHandler} className="bar-img" alt="img" src={Bars}/>
                  <Link to="/"> <img className="nav-logo" src={Logo} alt="img"/></Link>
                </Col>
                <Col className="p-1 mt-1" lg={3} md={4} sm={12} xs={12}>
                  <div className="input-group w-100">
                    <input onChange={this.SearchOnChange} type="text" className="form-control"/>
                    <Button onClick={this.SeachOnClick} type="button" className="btn site-btn"><i
                      className="fa fa-search"> </i>
                    </Button>
                  </div>
                </Col>
                <Col className="p-1 mt-1 d-flex
                flex-wrap" lg={6} md={4} sm={12} xs={10}>
                  {buttons}
                </Col>
              </Row>
              {this.searchRedirect()}
            </Container>
          </Navbar>
        </div>
        <div className={this.state.SideNavState}>
          <MegaMenuAll/>
        </div>
        <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverState}>
        </div>
      </Fragment>
    );
  }
}

export default NavMenuDesktop;
