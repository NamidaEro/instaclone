import React from "react";
import { Container, Image, Row, Col, Card, Button, InputGroup, FormControl } from 'react-bootstrap';

import './SignUp.css';

function SignUp(props) {
  return (
      <Container fluid>
          <Row className="login_header"></Row>
          <Row className="justify-content-md-center">
              <Card style={{ width: '22rem' }}>
                  <Row className="signup_header_3"></Row>
                  <Row className="justify-content-md-center container-margin-b10">
                      <Col md="auto"><Card.Img variant="top" src="img/login/instargram_letter.png" /></Col>
                  </Row>
                  
                  <Row className="justify-content-md-center container-margin-b10">
                      <Col md="auto">
                          <h5 className="vvzhL"><strong>친구들과 함께 즐겨보셈</strong></h5>
                      </Col>
                  </Row>
                  
                  <Row className="justify-content-md-center container-margin-b10">
                      <Col><p className="s311c"></p></Col>
                      <Col><p className="text-center _0tv-g">또는</p></Col>
                      <Col><p className="s311c"></p></Col>
                  </Row>
                  
                  <Row>
                      <Container>
                          <Row className="container-margin-b5">
                              <InputGroup>
                                  <FormControl
                                      placeholder="E-Mail"
                                      aria-label="email"
                                      aria-describedby="basic-addon1"
                                      />
                              </InputGroup>
                          </Row>
                          
                          <Row className="container-margin-b5">
                              <InputGroup>
                                  <FormControl
                                      placeholder="User Name"
                                      aria-label="username"
                                      aria-describedby="basic-addon1"
                                      />
                              </InputGroup>
                          </Row>
                          
                          <Row className="container-margin-b5">
                              <InputGroup>
                                  <FormControl
                                      placeholder="Password"
                                      aria-label="password"
                                      aria-describedby="basic-addon1"
                                      />
                              </InputGroup>
                          </Row>
                          
                          <Row className="container-margin-b5">
                              <div className="d-grid gap-2">
                                  <Button>가입</Button>
                              </div>
                          </Row>
                          
                    </Container>
                  </Row>
                  
                  <Card.Body></Card.Body>
              </Card>
          </Row>
      </Container>
  );
}

export default SignUp;