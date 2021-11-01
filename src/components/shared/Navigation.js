import  Nav from 'react-bootstrap/Nav'
import  Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import  { auth }  from "../auth/Firebase";
import { Button } from "react-bootstrap"
import {  signOut } from "firebase/auth";

const Navigation = () => {

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <>
        <Nav className="justify-content-center app-name" activeKey="/">
            <Navbar.Brand href="/">
                <Container>
                    <img
                    alt="logo"
                    src="../../assets/logo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top logo"
                    />{' '}
                    LodeStar
                </Container>
            </Navbar.Brand>
        </Nav>
        {/* add conditional once auth is implemented */}
        <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/astronauts">Astronauts</Nav.Link>
            <Nav.Link href="/iss">ISS Location</Nav.Link>
            <Button onClick={logout} href="/login">
                Sign Out
            </Button>
        </Nav>
        </>
    )
};

export default Navigation; 

