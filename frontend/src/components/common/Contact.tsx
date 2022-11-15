import React, {Component, FormEvent, Fragment, useState} from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import validation from '../../validation/validation';
import axios from 'axios'
import AppURL from '../../api/AppURL';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const nameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let name = event.target.value;
        // alert(name);
        setName(prevState => name);
    }

    const emailOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let email = event.target.value;
        // alert(email);
        setEmail(prevState => email);
    }

    const messageOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let message = event.target.value;
        // alert(message);
        setMessage(prevState => message);
    }

    const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        let sendBtn = document.getElementById('sendBtn') as HTMLElement;
        let contactForm = document?.getElementById('contactForm') as HTMLElement;

        if (message.length === 0) {
            toast.error("Пожалуйста, укажите ваше сообщение");
        } else if (name.length === 0) {
            toast.error("Пожалуйста, укажите ваше имя");
        } else if (email.length === 0) {
            toast.error("Пожалуйста, укажите ваш Email");
        } else if (!(validation.NameRegx).test(name)) {
            toast.error("Неправильное имя");
        } else {

            sendBtn.innerHTML = "Отправка...";
            let myFormData = new FormData();
            myFormData.append("name", name)
            myFormData.append("email", email)
            myFormData.append("message", message)

            axios.post(AppURL.postContact, myFormData).then( (response) => {
                if (response.status === 200 && response.data === 1) {
                    toast.success("Сообщение успешно отправлено");
                    sendBtn.innerHTML = "Отправить";
                    if (contactForm != null) {
                        // @ts-ignore
                        contactForm.onreset();
                    }
                } else {
                    toast.error("Ошибка");
                    sendBtn.innerHTML = "Отправить";
                }
            })
                .catch(function (error) {
                    toast.error(error);
                    sendBtn.innerHTML = "Отправить";
                });
        }
        event.preventDefault();
    }

    return (
        <Fragment>
            <Container>
                <Row className="p-2">
                    <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                        <Row className="text-center">
                            <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                <Form id="contactForm" onSubmit={onFormSubmit} className="onboardForm">
                                    <h4 className="section-title-login">СВЯЖИТЕСЬ С НАМИ</h4>
                                    <h6 className="section-sub-title">Пожалуйста, оставьте ваши контакты</h6>
                                    <input onChange={nameOnChange} className="form-control m-2" type="text"
                                           placeholder="Введите ваше имя"/>
                                    <input onChange={emailOnChange} className="form-control m-2" type="email"
                                           placeholder="Введите ваш Email"/>
                                    <Form.Control onChange={messageOnChange} className="form-control m-2"
                                                  as="textarea" rows={3} placeholder="Введите ваше сообщение"/>
                                    <Button id="sendBtn" type="submit"
                                            className="btn btn-block m-2 site-btn-login">Отправить</Button>
                                </Form>
                            </Col>
                            <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                <br></br><br></br>
                                <p className="section-title-contact">
                                    426008, Удмуртская Республика, город Ижевск, Пушкинская ул., д. 268
                                    Email: Support@easylearningbd.com
                                </p>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2181.064083564252!2d53.20728361599987!3d56.86199611336576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43e1391f33c4eb19%3A0xc5fe3bcf3b85b03e!2z0J_Rg9GI0LrQuNC90YHQutCw0Y8g0YPQuy4sIDI2OCwg0JjQttC10LLRgdC6LCDRgNC10YHQv9GD0LHQu9C40LrQsCDQo9C00LzRg9GA0YLQuNGPLCA0MjYwMDg!5e0!3m2!1sru!2sru!4v1667746985275!5m2!1sru!2sru"
                                    width="550" height="380" allowFullScreen={true} loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade" style={{display: 'flex'}}></iframe>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <ToastContainer/>
        </Fragment>
    )
}

export default Contact
