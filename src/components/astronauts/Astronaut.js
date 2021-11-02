import React, { useContext, useState, useEffect, } from 'react';
import Table from 'react-bootstrap/Table'
import AuthContext from '../auth/AuthContext';
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'


function Astronaut() {

    const { uid } = useContext(AuthContext);
    const [astronautData, setAstronautData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then(response => {
        setAstronautData(response.people);
        setIsLoading(false);
        });
    }, []);


    if (uid && uid) {
        // if loading is true, render div
        if (isLoading === true) {
            return (
                <>
                <div className="d-flex align-items-center justify-content-center mt-5">
                    <Spinner
                    as="span"
                    animation="grow"
                    size="xxl"
                    role="status"
                    aria-hidden="true"
                    />
                    Loading... If viewing on https://lodestar-app.netlify.app, browser will block API fetch because it's an unsecure site :(
                </div>
                </>
            );
        }

        // prevents error if api fetch takes time to load
        // if loading is true, render div
        if (!astronautData) {
            return <div></div>;
        
        } else if  (astronautData) {
            return (
                <>
                <section>
                    <h2 className="header">Astronauts Currently in Space</h2>
                        <div className="d-flex align-items-center justify-content-center">
                            <Table striped bordered hover variant="dark" className="table" responsive="sm">
                                <thead className="table-header">
                                    <tr>
                                        <th>Astronaut</th>
                                        <th>Spacecraft</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {astronautData && astronautData.map((index) => (
                                        <tr key={index}>
                                            <td className="table-data">{index.name}</td>
                                            <td className="table-data">{index.craft}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                </section>
                </>
                )
            }
    } else {
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

export default Astronaut;