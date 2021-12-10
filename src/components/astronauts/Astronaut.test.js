import React from 'react';
// import { shallow, mount } from 'enzyme'
// import Astronaut from './Astronaut';

describe('Astronaut data', ()  => {
    // execute block 
    // each it is an individual test 
    let people = []
    test('should fetch data from astronaut api', () => {
        // Shallow rendering renders a component without rendering any of its children
        // check if component renders when all props meet render data conditional
        return fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then(response => {
        people = response.people; 
        expect(people.length).toBeGreaterThan(0);
        });
    });
});