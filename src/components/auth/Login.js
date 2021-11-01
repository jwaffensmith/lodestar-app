import React from 'react';
import firebase from "./Firebase";
import 'firebase/auth';
import { useHistory } from 'react-router-dom'
import { Button, Card } from "react-bootstrap";

function Login () {

    // hook to redirect to profile after login
    const history = useHistory();

    // login with google
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
