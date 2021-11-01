import React, { useState, useEffect } from 'react';
import L from "leaflet"
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import AuthContext from '../auth/AuthContext';
import { useContext } from 'react';

function IssFetch() {

    const [issData, setIssData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://api.open-notify.org/iss-now.json")
        .then(res => res.json())
        .then(response => {
        setIssData([response]);
        setIsLoading(false);
        console.log(response)
        });
    }, []);

      // function to set custom map marker
    function getIcon() {
            return L.icon ({
            iconUrl: "../../assets/iss.png",
            iconSize: 100,
        })
    }

        // if loading is true, render div
        if (isLoading === true) {
            return <div>loading...</div>;
        }

        // prevents error if api fetch takes time to load
        // if loading is true, render div
        if (!issData) {
            return <div></div>;
        
        } else if  (issData) {
            return (
                <>
                <div id="map">
                    <MapContainer center={[issData[0].iss_position.latitude, issData[0].iss_position.longitude]} zoom={2} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[issData[0].iss_position.latitude, issData[0].iss_position.longitude]} icon={ getIcon() }>
                        </Marker>
                    </MapContainer>
                </div>
                </>
            );
        }
};

export default IssFetch;