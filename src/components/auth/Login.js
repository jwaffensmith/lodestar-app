import { 
    signInWithPopup, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signOut 
} from "firebase/auth";
import { useState } from "react";
import  { auth }  from "./Firebase";

function Login () {

    const provider = new GoogleAuthProvider(); 

    const [user, setUser ] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    
    const signInWithFirebase = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                // // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // // The signed-in user info.
                // const user = result.user;
                console.log(result)
                // ...
            }).catch((error) => {
                // // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // // The email of the user's account used.
                // const email = error.email;
                // // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // // ...
                console.log(error)
            });
    }

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <>
        <h4>Greetings, {user?.displayName}!</h4>
        <button onClick={logout}>logout</button>
        <button onClick={signInWithFirebase}>Log In with Google</button>
        </>
    )
};

export default Login;