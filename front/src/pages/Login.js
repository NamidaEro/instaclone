import React from "react";
import { Link } from "react-router-dom";
import { Container, Image, Row, Col, Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

import './Login.css';

function Login(props) {
    return (
        <Container fluid>
            <Container>
                <Row>
                    <Col md="auto login_header"></Col>
                </Row>
            </Container>

            <Row className="justify-content-md-center container-min-width-30">
                <Col sm={{ span: 3 }} className="login_leftside phone_body">
                    <Row className="phone_header">
                        <Col className="phone_body"></Col>
                    </Row>
                </Col>

                <Col sm={{ span: 3 }} className="phone_body">
                    <Row className="login_header_5">
                    </Row>
                    
                    <Row className="justify-content-md-center container-margin-b10">
                        <Card style={{ width: '22rem' }}>
                            <Row className="login_header_3"></Row>
                            <Row className="justify-content-md-center">
                                <Col md="auto"><Card.Img variant="top" src="img/login/instargram_letter.png" /></Col>
                            </Row>
                            <Row className="justify-content-md-center fluid">
                                <Card.Body></Card.Body>
                                
                                <Col>
                                    <Container>
                                        <Row className="container-margin-b5">
                                            <InputGroup>
                                                <FormControl
                                                  placeholder="E-Mail"
                                                  aria-label="E-Mail"
                                                  aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                        </Row>
                                        
                                        <Row className="container-margin-b10">
                                            <InputGroup>
                                                <FormControl
                                                  placeholder="Password"
                                                  aria-label="Password"
                                                  aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                        </Row>
                                        
                                        <Row className="container-margin-b10">
                                            <div className="d-grid gap-2">
                                                <Button variant="primary">
                                                Login
                                                </Button>
                                            </div>
                                        </Row>
                                        
                                        <Row className="container-margin-b10">
                                            <Col><p className="text-center"></p></Col>
                                            <Col><p className="text-center">or</p></Col>
                                            <Col><p className="text-center"></p></Col>
                                        </Row>
                                        
                                        <Row className="justify-content-md-center">
                                            <Col className="text-center"><Button variant="link">Forgot Password?</Button></Col>
                                        </Row>
                                    </Container>
                                </Col>
                                
                                <Card.Body></Card.Body>
                            </Row>
                        </Card>
                    </Row>
                    
                    <Row className="justify-content-md-center container-margin-b10">
                        <Card style={{ width: '22rem' }}>
                            <Card.Body>
                                <Row className="justify-content-md-center">
                                    <Col className="text-center">
                                        Do you want? <Link to="/SignUp"><span className="text-primary">Sign up</span></Link>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Row>
                    
                    <Row className="justify-content-md-center">
                        <Col className="text-center">
                            <Row className="container-margin-t5">
                                <p>Download the app. (Not Yet)</p>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
