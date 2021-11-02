import React from 'react';
import firebase from "./Firebase";
import 'firebase/auth';
import { useHistory } from 'react-router-dom'
import { Button, Card, Container } from "react-bootstrap";

function Login () {

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

    return (
        <>
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

export default Login;
