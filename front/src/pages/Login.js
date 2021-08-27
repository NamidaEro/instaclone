import React from "react";
import { Container, Image, Row, Col, Card, Button } from 'react-bootstrap';

import './Login.css';

function Login(props) {
    return (
        <Container fluid>
            <Container>
                <Row>
                    <Col md="auto login_header"></Col>
                </Row>
            </Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Image src="img/login/login_phone.png" rounded />
                </Col>
                <Col md="auto">
                    <Row className="login_header_5">
                    </Row>
                    <Row>
                        <Card style={{ width: '22rem' }}>
                            <Row className="login_header_3"></Row>
                            <Row>
                                <Col xs lg="2"></Col>
                                <Col md="auto"><Card.Img variant="top" src="img/login/instargram_letter.png" /></Col>
                                <Col xs lg="2"></Col>
                            </Row>
                            <Row className="fluid">
                                <Card.Body>
                                    <Card.Title className="text-center">Card Title</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Row>
                        </Card>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;