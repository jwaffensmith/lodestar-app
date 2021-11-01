import { 
    signInWithPopup, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
} from "firebase/auth";
import { useState } from "react";
import  { auth }  from "./Firebase";
import { Button, Card } from "react-bootstrap"

function Login () {

    const provider = new GoogleAuthProvider(); 

    const [user, setUser ] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    
    const signInWithFirebase = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(auth)
            }).catch((error) => {
            });
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Greetings!</h2>
                    <Button onClick={signInWithFirebase} className="text-center mb-4 w-30" >
                    Log In with Google
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
};

export default Login;