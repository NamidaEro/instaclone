import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Container, Image, Row, Col, Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';

import './SignUp.css';

function SignUp(props) {
    const [loginButton, setLoginButton] = useState(<Button disabled>가입</Button>);
    const [userInfo, setUserInfo] = useState({email:"", name:"", pwd:""});
    
    const handlerEmailChange = async (event) => {
        let text = event.target.value;
        userInfo.email = text;        
        console.log(userInfo);
        checkTxtFieldNull();
    };
    
    const handlerUserNameChange = async (event) => {
        let text = event.target.value;
        userInfo.name = text;
        console.log(userInfo);
        checkTxtFieldNull();
    };
    
    const handlerPasswordChange = async (event) => {
        let text = event.target.value;
        userInfo.pwd = text;
        console.log(userInfo);
        checkTxtFieldNull();
    };

    const handlerSignUpButton = (event) => {
        // console.log('email:%s username:%s password:%s', txtEmail, txtUserName, txtPassword);
    };
    
    const checkTxtFieldNull = () => {
        // console.log('email:%s username:%s password:%s', userInfo.email, userInfo.name, userInfo.pwd);
        if(0 < userInfo.email.length && 0 < userInfo.name.length && 0 < userInfo.pwd.length) {
            setLoginButton(<Button onClick={handlerSignUpButton}>가입</Button>);
        } else {
            setLoginButton(<Button disabled>가입</Button>);
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
                              <InputGroup>
                                  <FormControl
                                      placeholder="E-Mail"
                                      aria-label="email"
                                      aria-describedby="basic-addon1"
                                      type="email"
                                      onChange={handlerEmailChange}
                                      />
                              </InputGroup>
                          </Row>

                          <Row className="container-margin-b10">
                              <InputGroup>
                                  <FormControl
                                      placeholder="User Name"
                                      aria-label="username"
                                      aria-describedby="basic-addon1"
                                      onChange={handlerUserNameChange}
                                      />
                              </InputGroup>
                          </Row>

                          <Row className="container-margin-b10">
                              <InputGroup>
                                  <FormControl
                                      placeholder="Password"
                                      aria-label="password"
                                      aria-describedby="basic-addon1"
                                      type="password"
                                      onChange={handlerPasswordChange}
                                      />
                              </InputGroup>
                          </Row>

                          <Row className="container-margin-b10">
                              <div className="d-grid gap-2">
                                  {loginButton}
                              </div>
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