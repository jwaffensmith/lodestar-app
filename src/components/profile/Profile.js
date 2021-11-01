import React, { useState } from 'react'
import  { auth }  from "../auth/Firebase";    
import { Container, Card, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom"


function Profile () {

    // const { currentUser } = auth()
    // const history = useHistory()
    
    return ( 
        <>
        <Container>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Greetings, {auth.currentUser?.displayName}!</h2>
                </Card.Body>
                <Button href="/astronauts"> Who's in Space? </Button>
                <Button href="/iss"> Where is the ISS? </Button>
            </Card>
        </Container>
        </>
    )
}

export default Profile;
