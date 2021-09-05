import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Container, Image, Row, Col, Card, Button, InputGroup, FloatingLabel, Form } from 'react-bootstrap';
import axios from 'axios';

import './SignUp.css';

function SignUp(props) {
    const [loginButton, setLoginButton] = useState(<Button disabled>가입</Button>);
    const [userInfo, setUserInfo] = useState({email:"", name:"", pwd:""});
    
    const handlerEmailChange = (event) => {
        let text = event.target.value;
        userInfo.email = text;        
        console.log(userInfo);
        checkTxtFieldNull();
    };
    
    const handlerUserNameChange = (event) => {
        let text = event.target.value;
        userInfo.name = text;
        console.log(userInfo);
        checkTxtFieldNull();
    };
    
    const handlerPasswordChange = (event) => {
        let text = event.target.value;
        userInfo.pwd = text;
        console.log(userInfo);
        checkTxtFieldNull();
    };

    const handlerSignUpButton = (event) => {
        // let url = 'https://cinback.run.goorm.io/Signup';
        let url = 'https://cinback.run.goorm.io/login';

        let info = {id: 'hello', pw: 'world'};
        console.log(info);
        axios.post(url, info)
        .then(param => {
            console.log(param);
            props.history.push('/');
        })
        .catch(console.log);
        // fetch(url, {
        //     method: "post",
        //     headers: {
        //       "Content-Type": "application/json; charset=utf-8"
        //     },
        //     credentials: "same-origin",
        //     body: JSON.stringify(info)
        //   })
    };
    
    const checkTxtFieldNull = () => {
        // console.log('email:%s username:%s password:%s', userInfo.email, userInfo.name, userInfo.pwd);
        if(0 < userInfo.email.length && 0 < userInfo.name.length && 0 < userInfo.pwd.length) {
            setLoginButton(<Button onClick={handlerSignUpButton}>가입</Button>);
        } else {
            setLoginButton(<Button disabled>가입</Button>);
        }
    }

/* <form onSubmit={this.submitHandler}>
<input type="text" name="id" placeholder="ID"></input><br></br>
<input type="password" name="pwd" placeholder="PASSWORD"></input><br></br>
<input type="submit" value="LOGIN"/>
</form> */
    
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
                                <Form onSubmit={handlerSignUpButton}>
                                    <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingPassword" label="password" className="mb-3">
                                        <Form.Control type="password" placeholder="Enter password"></Form.Control>
                                    </FloatingLabel>
                                    <Button variant="primary" type="submit">
                                    Submit
                                    </Button>
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