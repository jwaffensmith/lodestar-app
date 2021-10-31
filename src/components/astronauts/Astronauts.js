import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

class Astronauts extends Component {

    // function to render astronaut names and spacecrafts in table
    renderData = (renderData, index) => {
        return (
            <tr key={index}>
                <td>{this.props.data[index].name}</td>
                <td>{this.props.data[index].craft}</td>
            </tr>
        )
    }

    render () {
        
        // if loading is true, render div
        if (this.props.loading) {
            return <div>loading...</div>;
        }

        // prevents error if api fetch takes time to load
        if (!this.props.data) {
            return <div></div>;
        }

        return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Astronaut</th>
                        <th>Spacecraft</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map(this.renderData)}
                </tbody>
            </Table>
        </>
        )
    }
}

export default Astronauts;