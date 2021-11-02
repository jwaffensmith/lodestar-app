import React from 'react';
import Particles from "react-tsparticles";
import ParticleConfig from './ParticleConfig';

// component to pass particlejs config (animation on login page)
function ParticleBackground() {
    return (
        <Particles params={ParticleConfig}></Particles>
    )
};

export default ParticleBackground;