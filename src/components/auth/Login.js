import React from 'react';
import firebase from "./Firebase";
import 'firebase/auth';
import { Button, Card } from "react-bootstrap";

function Login () {

    const signInWithFirebase = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            await firebase.auth().signInWithPopup(provider);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Greetings!</h2>
                    <Button onClick={ signInWithFirebase } className="justify-content-center w-30" >
                    Log In with Google
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
};

export default Login;
