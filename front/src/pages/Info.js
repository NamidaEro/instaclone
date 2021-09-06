import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';

import axios from 'axios';

function Info(props) {

    const handleLogoutButton = function (event) {
        Logout()
        .then(param => {
            props.history.push('/login');
        })
        .catch();
    };

    const Logout = function () {
        return new Promise((resolve, reject) => {
            let url = 'https://cinback.run.goorm.io/users/logout';

            axios.get(url, { withCredentials:true })
            .then(()=>{
                console.log('logout done');
                resolve();
            })
            .catch(() => {
                console.log('logout failed');
                reject();
            });
        });
    };

    return (
        <Container>
            <Button variant="primary" onClick={handleLogoutButton}>Logout</Button>
        </Container>
    );
}

export default Info;