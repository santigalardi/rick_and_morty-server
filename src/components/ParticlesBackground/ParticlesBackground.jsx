import Particles from 'react-tsparticles';
//eslint-disable-next-line no-unused-vars
import ParticlesConfig from './ParticlesConfig.js';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';

const ParticleBackground = () => {
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  return (
    <div>
      <Particles init={particlesInit} options={ParticlesConfig} />
    </div>
  );
};

export default ParticleBackground;
