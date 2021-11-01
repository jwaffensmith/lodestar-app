import  Nav from 'react-bootstrap/Nav'
import  Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import AuthContext from '../auth/AuthContext';
import { React, useContext } from 'react';

const Navigation = () => {

    const { uid, logout } = useContext(AuthContext);

    if (uid && uid) {
        return (
            <>
            <Nav className="justify-content-center app-name" activeKey="/">
                <Navbar.Brand>
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
            <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link href="/astronauts">Astronauts</Nav.Link>
                <Nav.Link href="/iss">ISS Location</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="/logout" onClick={logout}>Sign Out </Nav.Link>
            </Nav>
            </>
        )
    } else {
        return (
            <Nav className="justify-content-center app-name" activeKey="/">
                <Navbar.Brand href="">
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
        )
    }
};

export default Navigation; 

