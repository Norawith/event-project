import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import axios, { Axios } from 'axios';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userdata, setUserdata] = useState([]);

function validateForm(){
    return email.length > 0 && password.length > 0;
}

function handleSubmit(event) {
    event.preventDefault();
}

function Login(){
    axios.post('http://localhost:3001/login', {email, password}).then((response) => {
      setUserdata(response.data);
    })
}


    return <>
        <div className="Login">
            <Container>
            <Form onSubmit={handleSubmit} action=''>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <br />
                <Button block size="lg" type="submit" disabled={!validateForm()} onClick={Login}>
                    Login
                </Button>
            </Form>
            </Container>
        </div>
    </>;
}

export default Login;
