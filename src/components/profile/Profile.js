import AuthContext from '../auth/AuthContext';
import React, { useContext } from 'react';
import  Container  from "react-bootstrap/Container";
import Card  from "react-bootstrap/Card";
import  Button from "react-bootstrap/Button"

function Profile () {

    const { uid, displayName } = useContext(AuthContext);
    
    if (uid && uid) {

        return ( 
            <>
            <Container className="d-flex align-items-center justify-content-center">
                <h2 className="text-center mb-4 profile-header">Greetings, {displayName}!</h2>
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
    } else {
        return  (
            <>
            <div className="restricted-page">
                <h1 style={{ padding: "2rem"}}>Please log in to see this page.</h1>
                <Button style={{ background: '#1d2c41', border: "#1d2c41", padding: "10px" }}  href="/login" className="login-link">Go to Login</Button>
            </div>
            </>
        )
    }
}

export default Profile;
