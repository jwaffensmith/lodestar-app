import React, { Component } from 'react'


class Astronauts extends Component {

    render () {
        
        if (this.props.loading) {
            return <div>loading...</div>;
        }

        if (!this.props.data) {
            return <div></div>;
        }

        return (
            <div>
                <div>{this.props.data[0].craft}</div>
                <div>{this.props.data[0].name}</div> 
            </div>
        )
    }
}

export default Astronauts;