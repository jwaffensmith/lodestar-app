import React, { Component } from "react";
import Astronauts from "./Astronauts";

class AstronautContainer extends Component {
    state = {
        loading: true,
        astronautData: [],
    };

    // call on fetchData function
    componentDidMount() {
        this.fetchData()
    }

    // fetch astronaut data from api
    async fetchData() {
        const url = "http://api.open-notify.org/astros.json";
        const response = await fetch(url);
        const data = await response.json();
        // set state of data to people property
        this.setState({ astronautData: data.people, loading: false });
    }

    //pass astronaut data and loading state to Astronauts component
    render() {
       
        return (
        <div>
            <Astronauts loading={this.state.loading} data={this.state.astronautData}/>
        </div>
        );
    }
};

export default AstronautContainer;