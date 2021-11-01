import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import AuthContext from '../auth/AuthContext';
import { useContext } from 'react';

function Astronaut() {

    const [astronautData, setAstronautData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then(response => {
        setAstronautData(response.people);
        setIsLoading(false);
        console.log(response.people)
        });
    }, []);


        // if loading is true, render div
        if (isLoading === true) {
            return <div>loading...</div>;
        }

        // prevents error if api fetch takes time to load
        // if loading is true, render div
        if (!astronautData) {
            return <div></div>;
        
        } else if  (astronautData) {
            return (
                <>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Astronaut</th>
                                <th>Spacecraft</th>
                            </tr>
                        </thead>
                        <tbody>
                            {astronautData &&
                            astronautData.map((index) => (
                                <tr key={index}>
                                    <td>{index.name}</td>
                                    <td>{index.craft}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
                )
        }
};

export default Astronaut;