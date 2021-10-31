import React, { Component } from 'react'

class Iss extends Component {

    render () {
    
        if (this.props.loading) {
            return <div>loading...</div>;
        }

        if (!this.props.issData) {
            return <div></div>;
        }

        return (
            <div>
                <div>{this.props.issData[0].iss_position.latitude}</div>
                <div>{this.props.issData[0].iss_position.longitude}</div> 
            </div>
        )
    }
}

export default Iss;