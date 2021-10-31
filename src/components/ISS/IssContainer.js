import React, { Component } from "react";
import Iss from "./Iss";

class IssContainer extends Component {
    state = {
        loading: true,
        IssData: null,
    };

    async componentDidMount() {
        const url = "http://api.open-notify.org/iss-now.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ IssData: [data], loading: false });
    }

    render() {
        return (
            <div id="map">
                <Iss loading={this.state.loading} IssData={this.state.IssData}/>
            </div>
        );
    }
}

export default IssContainer;