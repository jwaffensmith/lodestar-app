import React, {  Component } from "react";
import Iss from "./Iss";
import L from "leaflet"
import { MapContainer, TileLayer, Marker } from 'react-leaflet'


class IssContainer extends Component {

    state = {
        loading: true,
        issData: [],
    };

    // fetch ISS current location data 
    async componentDidMount() {
        const url = "http://api.open-notify.org/iss-now.json";
        const response = await fetch(url);
        const data = await response.json();

        // set state of issData with json data
        this.setState({ issData: [data], loading: false });
    }

    // function to set custom map marker
    getIcon() {
        return L.icon ( {
            iconUrl: "../../assets/iss.png",
            iconSize: 100,
        })
    }

    render() {
        
        // if loading is true, render div
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        // prevents error if api fetch takes time to load
        if (!this.state.issData) {
            return <div></div>;
        }

        return (
            <>
            <div id="map">
                <MapContainer center={[this.state.issData[0].iss_position.latitude, this.state.issData[0].iss_position.longitude]} zoom={2} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[this.state.issData[0].iss_position.latitude, this.state.issData[0].iss_position.longitude]} icon={ this.getIcon() }>
                    </Marker>
                </MapContainer>
                <Iss loading={this.state.loading} issData={this.state.issData}/>
            </div>
            </>
        );
    }
}

export default IssContainer;