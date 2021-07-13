import React from 'react';
import Social from './Social';
import { motion } from 'framer-motion';

// type

const Hero: React.FC = () => {
  return (
    <section className='hero-container'>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='skew'
      >
        Taylor Lasher
      </motion.h1>
      <span>
        <h2>Creations</h2>
        <h2>Creations</h2>
        <h2>Creations</h2>
        <h2>Creations</h2>
        <h2>Creations</h2>
        <h2>Creations</h2>
        <h2>Creations</h2>
        <h2>Creations</h2>
        <h2>Creations</h2>
        <h2>Creations</h2>
        <h2>Creations</h2>
        <h2>Creations</h2>
        <h2>Creations</h2>
        <h2>Creations</h2>
        <h2>Creations</h2>
        <h2>Creations</h2>
      </span>
      <img
        src='/images/Taylor-Lasher-Creations-Icon.svg'
        alt='TLC'
        height={700}
        width={700}
      />
    </section>
  );
};
export default Hero;
