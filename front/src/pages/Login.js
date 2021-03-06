import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, FloatingLabel, Carousel, Form } from 'react-bootstrap';

import axios from 'axios';

import './Login.css';

// https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg
// https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg

function Login(props) {
    const [userInfo, setUserInfo] = useState({email:"", username:"", pwd:""});
    const [loginButton, setLoginButton] = useState(<Button variant="primary disabled">Sign in</Button>);
    const [isOnLoad, onLoad] = useState("true");

    useEffect(()=>{
        if(isOnLoad === "true") {
            console.log('Init Auth');
            AuthCall();
        }
    })

    const handlerEmailChange = (event) => {
        let text = event.target.value;
        let info = userInfo;
        info.email = text;
        setUserInfo(info);

        // console.log(userInfo);
        checkTxtFieldNull();
    };

    const handlerPasswordChange = (event) => {
        let text = event.target.value;
        let info = userInfo;
        info.pwd = text;
        setUserInfo(info);

        // console.log(userInfo);
        checkTxtFieldNull();
    };

    const handlerSignUpButton = (event) => {
        // console.log(event);
        sendLogin(userInfo)
        .then(param => {
            if(param.data.hasOwnProperty('isAuthenticated')) {
                // success
                AuthCheck(param);
            } else {
                AuthCall();
            }
        })
        .catch(console.log);
    };

    const checkTxtFieldNull = () => {
        // console.log('email:%s username:%s password:%s', userInfo.email, userInfo.username, userInfo.pwd);
        // if(0 < userInfo.email.length && 0 < userInfo.username.length && 0 < userInfo.pwd.length) {
        if(0 < userInfo.email.length && 0 < userInfo.pwd.length) {
            setLoginButton(<Button variant="primary" onClick={handlerSignUpButton}>Sign in</Button>);
        } else {
            setLoginButton(<Button variant="primary disabled" >Sign in</Button>);
        }
    }

    const sendLogin = (event) => {
        return new Promise((resolve, reject) => {
            let url = 'https://rkseksgkrns.shop:3001/users/login';

            let info = { email: event.email, username: event.username, pwd: event.pwd };
            // let info = { email: 'hongswin88@gmail.com', pwd: '1q2w3e4r' };
            console.log('sendLogin:', info);

            axios.post(url, info, { withCredentials:true })
            .then(resolve)
            .catch(reject);
        });
    };
    
    const AuthCall = () =>{
        // console.log('AuthCall');

        if(isOnLoad) onLoad("false");

        let url = 'http://rkseksgkrns.shop:3001/users/';
        axios.get(url, { withCredentials:true })
        .then(AuthCheck)
        .catch(console.log);
    }

    const AuthCheck = (param) => {
        let isSuccess = param.data.isAuthenticated;
        console.log(isSuccess);
        if(isSuccess) {
            // success
            props.history.push('/Info');
        } else {
            // failed
        }
    };

    return (
        <Container fluid>
            <Container>
                <Row>
                    <Col md="auto login_header"></Col>
                </Row>
            </Container>
            <Container className="justify-content-lg-center">
                <Row className="justify-content-lg-center container-min-width-30">
                    <Col sm={{ span: 3 }} className="login_leftside phone_body text-center">
                        <Row className="phone_header"></Row>
                        <Row>
                            <Col className="phone_body_img">
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                            className="phone_body_img_size"
                                            src="https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg"
                                            alt="first"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="phone_body_img_size"
                                            src="https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg"
                                            alt="second"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="phone_body_img_size"
                                            src="https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg"
                                            alt="third"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </Col>

                        </Row>
                    </Col>

                    <Col sm={{ span: 3 }} className="phone_body text-center">
                        <Container className="ligwidth">
                            <Row className="login_header_5"></Row>

                            <Row className="margin-b10 justify-content-center">
                                <Card style={{width:'350px'}}>
                                    <Row className="login_header_3"></Row>
                                    
                                    <Row className="justify-content-center">
                                        <Col xs="auto" className="">
                                            <Card.Img variant="top" src="img/login/instargram_letter.png" />
                                        </Col>
                                    </Row>
                                    
                                    <Row className="fluid">
                                        <Card.Body></Card.Body>

                                        <Col>
                                            <Row className="margin-b10">
                                                <Form>
                                                    <FloatingLabel controlId="floatingInput" label="Email">
                                                        <Form.Control className="container-margin-b10" type="email" placeholder="Enter email" onChange={handlerEmailChange} />
                                                    </FloatingLabel>

                                                    <FloatingLabel controlId="floatingPassword" label="password">
                                                        <Form.Control className="container-margin-b10" type="password" placeholder="Enter password" onChange={handlerPasswordChange} />
                                                    </FloatingLabel>

                                                    <div className="d-grid gap-2">{loginButton}</div>
                                                </Form>
                                            </Row>

                                            <Row className="margin-b20"></Row>

                                            <Row className="margin-b10">
                                                <Col><p className="s311c"></p></Col>
                                                <Col><p className="text-center _0tv-g">??????</p></Col>
                                                <Col><p className="s311c"></p></Col>
                                            </Row>

                                            <Row className="justify-content-xs-center">
                                                <Col className="text-center"><Button variant="link">?????? ??????????????? ??????????</Button></Col>
                                            </Row>
                                            
                                        </Col>

                                        <Card.Body></Card.Body>
                                    </Row>
                                </Card>
                            </Row>

                            <Row className="margin-b10 justify-content-center">
                                <Card style={{width:'350px'}}>
                                    <Card.Body>
                                        <Row className="justify-content-center">
                                            <Col className="text-center">
                                                SNS??? ????????? ?????????. <Link to="/SignUp"><span className="text-primary">??????</span></Link>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Row>

                            <Row className="">
                                <Col className="text-center">
                                    <Row className="container-margin-t5">
                                        <p>???????????? ??? (?????????)</p>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>

            
        </Container>
    );
}

export default Login;
