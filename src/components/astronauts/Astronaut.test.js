import React from 'react';
// import { shallow, mount } from 'enzyme'
// import Astronaut from './Astronaut';

describe('Astronaut data', ()  => {
    let people = []
    test('should fetch data from astronaut api', () => {
        return fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then(response => {
        people = response.people; 
        expect(people.length).toBeGreaterThan(0);
        });
    });
});