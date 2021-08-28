import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { InputGroup, FormControl, Button, Container, ButtonGroup, Navbar, Nav } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap'
// src/pages/index.js를 통해서 한번에 import 할 수 있도록 함
import { Login, Info, SignUp } from './pages';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/Info" component={Info} />
                <Route exact path="/SignUp" component={SignUp} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
        
            // <Navbar bg="light" expand="lg">
            //     <LinkContainer to="/">
            //         <Navbar.Brand>Head</Navbar.Brand>
            //     </LinkContainer>
            //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
            //     <Navbar.Collapse id="basic-navbar-nav">
            //         <Nav className="mr-auto">
            //             <LinkContainer to="/">
            //                 <Nav.Link>Home</Nav.Link>
            //             </LinkContainer>
            //             <LinkContainer to="/Login">
            //                 <Nav.Link>Login</Nav.Link>
            //             </LinkContainer>
            //         </Nav>
            //     </Navbar.Collapse>
            // </Navbar>