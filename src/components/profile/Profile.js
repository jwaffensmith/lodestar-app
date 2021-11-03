import AuthContext from '../auth/AuthContext';
import React, { useContext } from 'react';
import  Container  from "react-bootstrap/Container";
import Card  from "react-bootstrap/Card";
import  Button from "react-bootstrap/Button";
import {Animated} from "react-animated-css";

function Profile () {

    const { uid, displayName } = useContext(AuthContext);
    
    // if user, display welcome card with user.displayName
    if (uid && uid) {

        return ( 
            <>
            <Container className="d-flex align-items-center justify-content-center">
                <h2 className="text-center mb-4 profile-header">Greetings, {displayName}!</h2>
            </Container>
            <Container className="d-flex align-items-center justify-content-center">
                <Card style={{ width: '20rem'}} className="text-center profile-cards">
                    <Animated animationIn="swing" animationInDuration="10000" isVisible={true}>
                        <Card.Img variant="top" src="../../assets/astronaut.png" className="card-img"/>
                    </Animated>
                    <Card.Body>
                        <Button  style={{ background: '#1d2c41', border: "#1d2c41", padding: "10px" }} href="/astronauts" className="profile-button">Who's in Space?</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }} className="text-center profile-cards">
                    <Animated animationIn="swing" animationInDuration="10000"  isVisible={true}>
                        <Card.Img variant="top" src="../../assets/iss2.png" className="card-img"/>
                    </Animated>
                    <Card.Body>
                        <Button style={{ background: '#1d2c41', border: "#1d2c41", padding: "10px" }}  href="/iss" className="profile-button">Where is the ISS?</Button>
                    </Card.Body>
                </Card>
            </Container>
            </>
        )
    } else {
        // if no user.uid, display page is restricted
        // temporary solution
        // will need to refactor auth
        return  (
            <>
            <div className="restricted-page">
                <h1 style={{ padding: "2rem"}}>Please log in to see this page.</h1>
                <Button style={{ background: '#1d2c41', border: "#1d2c41", padding: "10px" }}  href="/login" className="login-link">Go to Login</Button>
            </div>
            </>
        )
    }
};

export default Profile;
