import React, { useState, useEffect, useContext } from 'react';
import L from "leaflet";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import AuthContext from '../auth/AuthContext';


function Iss() {

    const [issData, setIssData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { uid } = useContext(AuthContext);

    // fetch api data and set state 
    useEffect(() => {
        fetch("https://api.wheretheiss.at/v1/satellites/25544")
        .then(res => res.json())
        .then(response => {
        setIssData([response]);
        setIsLoading(false);
        });
    }, []);


    // function to set custom map marker
    function getIcon() {
            return L.icon ({
            iconUrl: "../../assets/iss.png",
            iconSize: 100,
        });
    };

    if (uid) {
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
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <p> Loading... </p>
                </div>
            </>
            )
        }
        if (!issData) {
            return <div></div>;

        } else if (issData) {
            const latitude = issData[0].latitude.toFixed(3)
            const longitude = issData[0].longitude.toFixed(3)
            const altitude = issData[0].altitude
            const velocity = issData[0].velocity
            return (
            <>
                <div id="map">
                    <h2 className="header">Current Location of ISS</h2>
                    <h4 className="stats">Coordinates: &nbsp;{latitude}&deg;, &nbsp;{longitude}&deg;</h4>
                    <h4 className="stats">Altitude:  &nbsp;{altitude}</h4>
                    <h4 className="stats">Velocity: &nbsp;{velocity}</h4>
                    <Container className="d-flex align-items-center justify-content-center mt-5">
                        <MapContainer center={[issData[0].latitude, issData[0].longitude]} zoom={2} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[issData[0].latitude, issData[0].longitude]} icon={ getIcon() }>
                            </Marker>
                        </MapContainer>
                    </Container>
                </div>
            </>
            );
        }
    } else {
        // if no user.uid, display page is restricted
        // temporary solution
        // will need to refactor auth
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

export default Iss;