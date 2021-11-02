import React from 'react';
import Particles from "react-tsparticles";
import ParticleConfig from './ParticleConfig';

function ParticleBackground() {
    return (
        <Particles params={ParticleConfig}></Particles>
    )
};

export default ParticleBackground;