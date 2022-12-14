import React, {Component, Fragment} from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import axios from "axios";

import Login from "../../assets/images/login.png";
import AppURL from "../../api/AppURL";

class UserLogin extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      message: "",
      loggedIn: false,
    };
  }

  // Login Form Submit Method
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    axios.post(AppURL.UserLogin, data).then(response => {
      localStorage.setItem("token", response.data.token);
      this.setState({loggedIn: true});
      this.props.setUser(response.data.user);

    }).catch(error => {
    });

  };

  render() {
    /// After Login Redirect to Profile Page
    if (this.state.loggedIn) {
      return <Redirect to={'/profile'} />;
    }

    if (localStorage.getItem("token")) {
      return <Redirect to="/profile" />;
    }

    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
              <Row className="text-center">
                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                  <Form className="onboardForm" onSubmit={this.formSubmit}>
                    <h4 className="section-title-login"> ВХОД ПОЛЬЗОВАТЕЛЯ</h4>
                    <input className="form-control m-2" type="email" placeholder="Enter Your Email"
                      onChange={(e) => {
                        this.setState({email: e.target.value});
                      }}/>
                    <input className="form-control m-2" type="password"
                      placeholder="Enter Your Password" onChange={(e) => {
                        this.setState({password: e.target.value});
                      }}/>
                    <Button type="submit"
                      className="btn btn-block m-2 site-btn-login"> Авторизоваться </Button>
                    <br></br> <br></br>
                    <hr/>
                    {/*<p><b> Забыли свой пароль? </b><Link to="/forget"><b> Забыли пароль </b>*/}
                    {/*</Link></p>*/}
                    <p><b> Нет учетной записи? </b><Link
                      to="/register"><b> Зарегистирироваться</b>
                    </Link></p>
                  </Form>
                </Col>
                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <img className="onboardBanner" src={Login} alt="img"/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default UserLogin;
