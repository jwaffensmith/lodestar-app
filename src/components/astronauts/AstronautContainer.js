import React, { Component } from "react";
import Astronauts from "./Astronauts";

class AstronautContainer extends Component {
    state = {
        loading: true,
        astronautData: [],
    };

    async componentDidMount() {
        const url = "http://api.open-notify.org/astros.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ astronautData: data.people, loading: false });
    }

    render() {
       
        return (
        <div>
            <Astronauts loading={this.state.loading} data={this.state.astronautData}/>
        </div>
        );
    }
};

export default AstronautContainer;