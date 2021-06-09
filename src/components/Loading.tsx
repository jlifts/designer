import React from 'react';
import { motion } from 'framer-motion';

const Loading = ({ setLoading }) => {
  const load = {
    hidden: {
      opacity: 0,
      y: 400,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 2.5,
      },
    },
    exit: {
      opacity: 0.2,
      y: -400,
    },
  };
  return (
    <motion.div
      variants={load}
      initial='hidden'
      animate='show'
      exit='exit'
      onAnimationComplete={() => setLoading(false)}
      className='loading'
    >
      <h1>Let's Begin your Experience</h1>
    </motion.div>
  );
};

export default Loading;
