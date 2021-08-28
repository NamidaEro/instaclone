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
                        </Col>
                    </Row>
                   
                    <Card.Body>
                    </Card.Body>
                </Card>
            </Row>
      </Container>
  );
}

export default SignUp;