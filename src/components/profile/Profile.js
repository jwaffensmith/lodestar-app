import React, { Component } from 'react'
import  { auth }  from "../auth/Firebase";    
import { Card } from "react-bootstrap"

class Profile extends Component {
    render () {
        return (
            <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Greetings, {auth.currentUser?.displayName}!</h2>
                </Card.Body>
            </Card>
            </>
        )
    }
}

export default Profile;
