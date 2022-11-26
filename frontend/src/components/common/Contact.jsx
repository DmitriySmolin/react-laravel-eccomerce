import React, {Component, Fragment} from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";

import axios from "axios";

import {ToastContainer, toast} from "react-toastify";

import validation from "../../validation/validation";
import AppURL from "../../api/AppURL";

import "react-toastify/dist/ReactToastify.css";

export class Contact extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  nameOnChange = (event) => {
    const name = event.target.value;
    // alert(name);
    this.setState({name: name});
  };

  emailOnChange = (event) => {
    const email = event.target.value;
    // alert(email);
    this.setState({email: email});
  };

  messageOnChange = (event) => {
    const message = event.target.value;
    // alert(message);
    this.setState({message: message});
  };

  onFormSubmit = (event) => {

    const name = this.state.name;
    const email = this.state.email;
    const message = this.state.message;
    const sendBtn = document.getElementById("sendBtn");
    const contactForm = document.getElementById("contactForm");

    if (message.length === 0) {
      toast.error("Пожалуйста, напишите ваше сообщение");
    } else if (name.length === 0) {
      toast.error("Пожалуйста, напишите ваше имя");
    } else if (email.length === 0) {
      toast.error("Пожалуйста, напишите ваш Email");
    } else if (!(validation.NameRegx).test(name)) {
      toast.error("Имя неправильно");
    } else {

      sendBtn.innerHTML = "Отправка...";
      const MyFormData = new FormData();
      MyFormData.append("name", name);
      MyFormData.append("email", email);
      MyFormData.append("message", message);

      axios.post(AppURL.PostContact, MyFormData).then(function (response) {
        if (response.status === 200 && response.data === 1) {
          toast.success("Сообщение успешно отправлено");
          sendBtn.innerHTML = "Отправить";
          contactForm.reset();
        } else {
          toast.error("Ошибка!");
          sendBtn.innerHTML = "Отправить";
        }
      })
        .catch(function (error) {
          toast.error(error);
          sendBtn.innerHTML = "Отправить";
        });
    }
    event.preventDefault();
  };

  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
              <Row className="text-center">
                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                  <Form id="contactForm" onSubmit={this.onFormSubmit} className="onboardForm">
                    <h4 className="section-title-login">СВЯЗАТЬСЯ С НАМИ </h4>
                    <h6 className="section-sub-title">Пожалуйста, оставьте ваши контактные
                                            данные </h6>
                    <input onChange={this.nameOnChange} className="form-control m-2" type="text"
                      placeholder="Введите ваше имя"/>
                    <input onChange={this.emailOnChange} className="form-control m-2" type="email"
                      placeholder="Введите ваш Email"/>
                    <Form.Control onChange={this.messageOnChange} className="form-control m-2"
                      as="textarea" rows={3} placeholder="Сообщение"/>
                    <Button id="sendBtn" type="submit"
                      className="btn btn-block m-2 site-btn-login">Отправить</Button>
                  </Form>
                </Col>
                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <br></br><br></br>
                  <p className="section-title-contact">
                                        426008, Удмуртская Республика, город Ижевск, Пушкинская ул., д. 268
                                        Email: easyshop@gmail.com
                  </p>
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2181.0967485496185!2d53.20890021599978!3d56.86143591340951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43e13ec9c1082c9d%3A0x300cb54458c8123a!2z0JzQtdC20LTRg9C90LDRgNC-0LTQvdGL0Lkg0JLQvtGB0YLQvtGH0L3Qvi3QldCy0YDQvtC_0LXQudGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YI!5e0!3m2!1sru!2sru!4v1668987619826!5m2!1sru!2sru`}
                    width="500" height="450" style={{border: 0}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <ToastContainer/>
      </Fragment>
    );
  }
}

export default Contact;
