import React, { useContext } from 'react';
import firebase from "./Firebase";
import 'firebase/auth';
import { useHistory } from 'react-router-dom'
import { Button, Card, Container } from "react-bootstrap";
import AuthContext from '../auth/AuthContext';
import ParticleBackground from '../particle-js/ParticleBackground';


function Login () {

    const { uid, displayName} = useContext(AuthContext);

    // hook to redirect to profile after login
    const history = useHistory();

    // login with google function
    const signInWithFirebase = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            await firebase.auth().signInWithPopup(provider);
            history.push("/profile")
        } catch (error) {
            alert(error.message);
        }
    };

    // if no user.uid, display page is restricted
    // temporary solution
    // will need to refactor auth
    if (uid) {
        return ( 
            <>
            <div className="restricted-page">
                <h1 style={{ padding: "2rem"}}>{displayName}, you are logged in.</h1>
                <Button style={{ background: '#1d2c41', border: "#1d2c41", padding: "10px" }}  href="/profile" className="login-link">Go to Profile</Button>
            </div>
            </>
        )
    } else {
        return (
            <>
            <ParticleBackground/>
            <Container className="d-flex align-items-center justify-content-center login-container">
                <Card className="text-center login-card">
                    <Card.Body >
                        <Card.Title className="login-title">Greetings, Earthling!</Card.Title>
                        <Card.Text className="login-text">
                        Log in to see who's currently in space.
                        </Card.Text>
                        <Button onClick={ signInWithFirebase } className="justify-content-center login-button" >
                            Log in With google
                            </Button>
                    </Card.Body>
                </Card>
            </Container>
            </>
        )
    };
};

export default Login;
