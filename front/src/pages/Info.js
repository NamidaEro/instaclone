import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, InputGroup, FloatingLabel, Carousel, Form } from 'react-bootstrap';

import axios from 'axios';

function Info(props) {

    const handleLogoutButton = function (event) {
        Logout()
        .then(param => {
            props.history.push('/login');
        })
        .catch(console.log);
    };

    const Logout = function () {
        return new Promise((resolve, reject) => {
            let url = 'https://cinback.run.goorm.io/users/logout';

            console.log('sendLogout:');

            axios.get(url, { withCredentials:true })
            .then(resolve)
            .catch(reject);
        });
    };

    return (
        <Container>
            <Button variant="primary" onClick={handleLogoutButton}>Logout</Button>
        </Container>
    );
}

export default Info;