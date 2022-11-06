import React, {Component, Fragment, useEffect, useState} from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import AppURL from '../../api/AppURL';
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Purchase = () => {

    const [purchase, setPurchase] = useState('');
    const [loaderDiv, setLoaderDiv] = useState('');
    const [mainDiv, setMainDiv] = useState('d-none');

    useEffect(() => {

            let siteInfoPurchase = sessionStorage.getItem("allSiteInfo");

            if (!siteInfoPurchase) {

                axios.get(AppURL.allSiteInfo).then(res => {
                    let statusCode = res.status;
                    if (statusCode == 200) {
                        let jsonData = (res.data)[0]['purchase_guide'];
                        setPurchase(jsonData);
                        setLoaderDiv('d-none');
                        setMainDiv('');
                        sessionStorage.setItem("SiteInfoPurchase", jsonData)
                    } else {
                        toast.error("Something Went Wrong", {
                            position: "bottom-center"
                        });
                    }


                }).catch(error => {
                    toast.error("Something Went Wrong", {
                        position: "bottom-center"
                    });
                });

            }  // end If Conditon
            else {
                setPurchase(siteInfoPurchase);
                setLoaderDiv('d-none');
                setMainDiv('');
            }
        }, []);

    return (
        // <Fragment>
        //     <Container>
        //         <Row className="p-2">
        //             <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
        //                 <div className={loaderDiv}>
        //                     <div className="ph-item">
        //                         <div className="ph-col-12">
        //                             <div className="ph-row">
        //                                 <div className="ph-col-4"></div>
        //                                 <div className="ph-col-8 empty"></div>
        //                                 <div className="ph-col-6"></div>
        //                                 <div className="ph-col-6 empty"></div>
        //                                 <div className="ph-col-12"></div>
        //                                 <div className="ph-col-12"></div>
        //                                 <div className="ph-col-12"></div>
        //                                 <div className="ph-col-12"></div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="ph-item">
        //                         <div className="ph-col-12">
        //                             <div className="ph-row">
        //                                 <div className="ph-col-4"></div>
        //                                 <div className="ph-col-8 empty"></div>
        //                                 <div className="ph-col-6"></div>
        //                                 <div className="ph-col-6 empty"></div>
        //                                 <div className="ph-col-12"></div>
        //                                 <div className="ph-col-12"></div>
        //                                 <div className="ph-col-12"></div>
        //                                 <div className="ph-col-12"></div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className={mainDiv}>
        //                     <h4 className="section-title-login">Purchase Page </h4>
        //                     <p className="section-title-contact">
        //                         {ReactHtmlParser(purchase)}
        //                     </p>
        //                 </div>
        //             </Col>
        //         </Row>
        //     </Container>
        //     <ToastContainer/>
        // </Fragment>
        <Fragment>
            <Container>
                <Row className="p-2">
                    <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                        <h4 className="section-title-login">Purchase Page </h4>
                        <p className="section-title-contact">
                            Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching I am a founder of eLe easy Learning and a passionate Web Developer, Programmer & Instructor.<br></br><br></br>

                            I am working online for the last 7 years and have created several successful websites running on the internet. I try to create a project-based course that helps you to learn professionally and make you fell as a complete developer. easy learning exists to help you succeed in life.<br></br><br></br>

                            Each course has been hand-tailored to teach a specific skill. I hope you agree! Whether you’re trying to learn a new skill from scratch or want to refresh your memory on something you’ve learned in the past, you’ve come to the right place.<br></br>

                            Education makes the world a better place. Make your world better with new skills.
                        </p>


                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Purchase
