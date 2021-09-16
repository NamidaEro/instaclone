import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, FloatingLabel, Form } from 'react-bootstrap';
import axios from 'axios';

import './SignUp.css';

function SignUp(props) {
    const [loginButton, setLoginButton] = useState(<Button className="signup_button_width disabled">Sign Up</Button>);
    const [userInfo, setUserInfo] = useState({email:"", username:"", pwd:""});

    const handlerEmailChange = (event) => {
        let text = event.target.value;
        userInfo.email = text;        
        // console.log(userInfo);
        checkTxtFieldNull();
    };
    
    const handlerUserNameChange = (event) => {
        let text = event.target.value;
        userInfo.username = text;
        // console.log(userInfo);
        checkTxtFieldNull();
    };
    
    const handlerPasswordChange = (event) => {
        let text = event.target.value;
        userInfo.pwd = text;
        // console.log(userInfo);
        checkTxtFieldNull();
    };

    const handlerSignUpButton = (event) => {
        // console.log(event);
        sendSignUp(userInfo)
        // .then(sendLogin)
        .then(param => {
            console.log(param);
            props.history.push('/');
        })
        .catch(console.log);
    };

    const sendSignUp = (event) => {
        return new Promise((resolve, reject) => {
            let url = 'http://rkseksgkrns.shop:3001/users/signup';
            console.log('sendSignUp:', event);
            // axios.defaults.withCredentials = true;
    
            axios.post(url, event)
            .then((param) => {
                console.log(param);
                resolve(param.data[0]);
            })
            .catch(reject);
        });
    };

    const sendLogin = (event) => {
        return new Promise((resolve, reject) => {
            let url = 'http://rkseksgkrns.shop:3001/users/login';

            let info = { email: event.email, username: event.username, pwd: event.pwd };
            console.log('sendLogin:', info);

            axios.post(url, info)
            .then(resolve)
            .catch(reject);
        });
    };
    
    const checkTxtFieldNull = () => {
        // console.log('email:%s username:%s password:%s', userInfo.email, userInfo.username, userInfo.pwd);
        if(0 < userInfo.email.length && 0 < userInfo.username.length && 0 < userInfo.pwd.length) {
        // if(0 < userInfo.email.length && 0 < userInfo.pwd.length) {
            setLoginButton(<Button className="signup_button_width" onClick={handlerSignUpButton}>Sign Up</Button>);
        } else {
            setLoginButton(<Button className="signup_button_width disabled">Sign Up</Button>);
        }
    }

    return (
        <Container fluid>
            <Row className="login_header"></Row>
            
            <Row className="justify-content-center container-margin-b10">
                <Card style={{ width: '22rem' }}>
                    <Row className="signup_header_3"></Row>
                    <Row className="justify-content-center container-margin-b10">
                        <Col md="auto"><Card.Img variant="top" src="img/login/instargram_letter.png" /></Col>
                    </Row>

                    <Row className="justify-content-center container-margin-b10">
                        <Col md="auto">
                            <h5 className="vvzhL"><strong>친구들과 함께 즐겨보셈</strong></h5>
                        </Col>
                    </Row>

                    <Row className="justify-content-center container-margin-b20">
                        <Col><p className="s311c"></p></Col>
                        <Col><p className="text-center _0tv-g">또는</p></Col>
                        <Col><p className="s311c"></p></Col>
                    </Row>

                    <Row>
                        <Container>
                            <Row className="container-margin-b10">
                                <Form>
                                    <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                                        <Form.Control type="email" placeholder="Enter email" onChange={handlerEmailChange} />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingName" label="name" className="mb-3">
                                        <Form.Control type="name" placeholder="Enter name" onChange={handlerUserNameChange} />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingPassword" label="password" className="mb-3">
                                        <Form.Control type="password" placeholder="Enter password" onChange={handlerPasswordChange} />
                                    </FloatingLabel>
                                    {loginButton}
                                </Form>
                                
                            </Row>
                        </Container>
                    </Row>

                    <Card.Body></Card.Body>
                </Card>
            </Row>

            <Row className="justify-content-center container-margin-b20">
                <Card style={{ width: '22rem' }}>
                    <Card.Body>
                        <Row className="justify-content-md-center">
                            <Col className="text-center">
                            계정이 있으신가요? <Link to="/Login"><span className="text-primary">로그인</span></Link>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>

            <Row className="justify-content-center">
                <Col className="text-center">
                    <Row className="container-margin-t5">
                        <p>다운로드 앱 (미지원)</p>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default SignUp;