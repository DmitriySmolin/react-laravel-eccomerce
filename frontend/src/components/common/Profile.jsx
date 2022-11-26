import React, {Component} from "react";
import {Fragment} from "react";
import {Container, Row, Col, Card, ListGroup, ListGroupItem} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";

import Ariyan from "../../assets/images/kaziariyan.png";

class Profile extends Component {
  render() {

    let name;
    let email;
    if (this.props.user) {
      name = this.props.user.name;
      email = this.props.user.email;
    }

    if (!localStorage.getItem("token")) {
      return <Redirect to="/login" />;
    }

    return (
      <Fragment>
        <div className="section-title text-center mb-55"><h2>Страница профиля пользователя</h2>
        </div>
        <Container>
          <Row>
            <Col lg={4} md={4} sm={12}>
              <Card style={{width: "18rem"}}>
                <Card.Img variant="top" src={Ariyan} className="userprofile"/>
                <hr/>
                <ListGroup className="list-group-flush">
                  <ListGroupItem> <Link className="text-link" to="/orderlist"
                    style={{textAlign: "center"}}><p
                      className="product-name-on-card"> Список заказов </p></Link> </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
            <Col lg={8} md={8} sm={12}>
              <ul className="list-group">
                <li className="list-group-item" style={{fontWeight: "bolder"}}>Имя : {name} </li>
                <li className="list-group-item" style={{fontWeight: "bolder"}}>Email : {email} </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Profile;
