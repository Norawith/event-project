import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron } from 'react-bootstrap';

import {BrowserRouter, Link, Route, Routes, NavLink} from 'react-router-dom';
import Event_Banner from './Event_Banner';

function Event_Navber() {
    return (
    <>
            <Navbar className="justify-content-between" bg="ligth" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                    <img className="logo" src="/images/logo.png" style={{height: 50}}/>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="me-auto"></div>
                        <Nav >
                            <Nav.Link style={{padding: 15}} href="/">
                                หน้าแรก
                            </Nav.Link>

                            <NavDropdown title="กิจกรรม" id="Event-dropdown" href="#" target="_blank" style={{padding: 7}}>

                                <NavDropdown.Item href="questions">กิจกรรมตอบคำถาม</NavDropdown.Item>
                                <NavDropdown.Divider />
                                
                                <NavDropdown.Item href="#">จิ๊กซอร์</NavDropdown.Item>
                                <NavDropdown.Divider />

                                <NavDropdown.Item href="/story">เรื่องเล่า</NavDropdown.Item>
                                

                                
                                {/* <NavDropdown.Item href="/story">
                                    <NavLink to="/story" className="text-decoration-none text-dark">
                                        เรื่องเล่า
                                    </NavLink>
                                </NavDropdown.Item> */}
                                
                                
                                
                            </NavDropdown>

                            

                            <Nav.Link href="#" target="_blank" style={{padding: 15}}>
                                ค้นหาศิษย์เก่า
                            </Nav.Link>

                            <Nav.Link href="#" target="_blank" style={{padding: 15}}>
                                ติดต่อเรา
                            </Nav.Link>

                            <Nav.Link href="/Login" >
                                <button className="btn btn-primary" type="submit">Sign Up</button>
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>);
}

            export default Event_Navber;
