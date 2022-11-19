import React, {Fragment, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import AppURL from "../../api/AppURL";
import {Link} from "react-router-dom";

const Categories = () => {

    const [menuData, setMenuData] = useState([]);
    const [isLoading, setIsLoading] = useState('');
    const [mainDiv, setMainDiv] = useState('d-none');


    useEffect(() => {
        axios.get(AppURL.allCategoryDetails).then(response => {
            setMenuData(response.data);
            setIsLoading('d-none');
            setMainDiv('')
        }).catch(error => {
        });
    }, [])

    const catList = menuData;
    const myView = catList.map((catList:any, i:any) => {
        return <Col key={i.toString()} className="p-0"  xl={2} lg={2} md={2} sm={6} xs={6}>
            <Link className="text-link" to={"/productcategory/" + catList.category_name}>
                <Card className="h-100 w-100 text-center">
                    <Card.Body>
                        <img className="center" src={catList.category_image}/>
                        <h5 className="category-name">{catList.category_name}</h5>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    })

    return (
        <Fragment>
            <Container>
                <div className="section-title text-center mb-55">
                    <h2>Категории</h2>
                    <p>Некоторые продукты из нашей эксклюзивной коллекции, которые могут вам понравиться</p>
                </div>
                <Row>
                    {myView}
                </Row>
            </Container>
        </Fragment>
    );
};

export default Categories;