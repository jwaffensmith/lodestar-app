import React, {  Component } from "react";
import Iss from "./Iss";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

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

    render() {

        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.issData) {
            return <div></div>;
        }

        return (
            <>
            <div id="map">
                <MapContainer center={[this.state.issData[0].iss_position.latitude, this.state.issData[0].iss_position.longitude]} zoom={1} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[this.state.issData[0].iss_position.latitude, this.state.issData[0].iss_position.longitude]}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
                <Iss loading={this.state.loading} issData={this.state.issData}/>
            </div>
            </>
        );
    }
}

export default IssContainer;