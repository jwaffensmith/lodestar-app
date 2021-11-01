import AuthContext from '../auth/AuthContext';
import { React, useContext } from 'react';
import { Container, Card, Button } from "react-bootstrap";


function Profile () {

    const { displayName, photoURL } = useContext(AuthContext);
    
    return ( 
        <>
        <Container className="d-flex align-items-center justify-content-center">
            <Card>
                <Card.Body>
                    <img src={photoURL && photoURL} alt="avatar"/>
                    <h2 className="text-center mb-4">Greetings, {displayName && displayName}!</h2>
                </Card.Body>
                <Button href="/astronauts"> Who's in Space? </Button>
                <Button href="/iss"> Where is the ISS? </Button>
            </Card>
        </Container>
        </>
    )
}

export default Profile;
