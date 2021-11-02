import AuthContext from '../auth/AuthContext';
import React, { useContext } from 'react';
import { Container } from "react-bootstrap/Container";
import { Card } from "react-bootstrap/Card";
import { Button } from "react-bootstrap/Button";


function Profile () {

    const { displayName } = useContext(AuthContext);
    
    return ( 
        <>
        <Container className="d-flex align-items-center justify-content-center">
            <h2 className="text-center mb-4 profile-header">Greetings, {displayName && displayName}!</h2>
        </Container>
        <Container className="d-flex align-items-center justify-content-center">
            <Card style={{ width: '18rem'}} className="text-center profile-cards">
                <Card.Img variant="top" src="../../assets/astronaut.png"  />
                <Card.Body>
                    <Button  style={{ background: '#1d2c41', border: "#1d2c41", padding: "10px" }} href="/astronauts" className="profile-button">Who's in Space?</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="text-center profile-cards">
                <Card.Img variant="top" src="../../assets/iss2.png" />
                <Card.Body>
                    <Button style={{ background: '#1d2c41', border: "#1d2c41", padding: "10px" }}  href="/iss" className="profile-button">Where is the ISS?</Button>
                </Card.Body>
            </Card>
        </Container>
        </>
    )
}

export default Profile;
