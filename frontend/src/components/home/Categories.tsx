import React, {Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const Categories = () => {
    return (
        <Fragment>
            <Container>
                <div className="section-title text-center mb-55">
                    <h2>Категории</h2>
                    <p>Некоторые продукты из нашей эксклюзивной коллекции, которые могут вам понравиться</p>
                </div>
                <Row>
                    <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
                        <Row>
                            <Col className="p-0" key={2} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                        <img className="center"
                                             src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"/>
                                        <h5 className="category-name">Лучшие предложения</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="p-0" key={3} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                        <img className="center"
                                             src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"/>
                                        <h5 className="category-name">Бакалея</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="p-0" key={4} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                        <img className="center"
                                             src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"/>
                                        <h5 className="category-name">Смартфоны</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="p-0" key={5} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                        <img className="center"
                                             src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"/>
                                        <h5 className="category-name">Одежда</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col key={6} xl={6} lg={6} md={2} sm={12} xs={12}>
                        <Row>
                            <Col className="p-0" key={7} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                        <img className="center" src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" />
                                        <h5 className="category-name">Электроника</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="p-0" key={8} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                        <img className="center" src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" />
                                        <h5 className="category-name">Дом</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="p-0" key={9} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                        <img className="center" src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" />
                                        <h5 className="category-name">Техника</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="p-0" key={11} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                        <img className="center" src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" />
                                        <h5 className="category-name">Красота, игрушки</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
                        <Row>
                            <Col className="p-0" key={2} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                        <img className="center"
                                             src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"/>
                                        <h5 className="category-name">Лучшие предложения</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="p-0" key={3} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                        <img className="center"
                                             src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"/>
                                        <h5 className="category-name">Бакалея</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="p-0" key={4} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                        <img className="center"
                                             src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"/>
                                        <h5 className="category-name">Смартфоны</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="p-0" key={5} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                        <img className="center"
                                             src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"/>
                                        <h5 className="category-name">Одежда</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col key={6} xl={6} lg={6} md={2} sm={12} xs={12}>
                        <Row>
                            <Col className="p-0" key={7} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                        <img className="center" src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" />
                                        <h5 className="category-name">Электроника</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="p-0" key={8} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                        <img className="center" src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" />
                                        <h5 className="category-name">Дом</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="p-0" key={9} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                        <img className="center" src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" />
                                        <h5 className="category-name">Техника</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="p-0" key={11} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                        <img className="center" src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" />
                                        <h5 className="category-name">Красота, игрушки</h5>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Categories;