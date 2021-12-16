import React from 'react';
import Skills from '../../components/Skills';
import Header from '../../components/Header';
import PicRoll from '../../components/PicRoll';
import { motion } from 'framer-motion';

//Pictures

function Packaging() {
  return (
    <motion.section
      className='info-section'
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 70 }}
      transition={{ default: { duration: 1.3 } }}
    >
      <div className='sidebar'>
        <div className='upper'>
          <Header infoTitle='PACKAGING' />
        </div>
        <div className='skillz'>
          <Skills
            skill='Adobe Creative Suite'
            skill1='Graphic Design'
            skill2='Layout'
          />
        </div>
        <p className='info'>
          As a packaging designer, I have guided the design process from the
beginning to the end. I’ve conceptualized, designed, and executed
prototypes for attention-grabbing packaging materials, using design
elements such as shape, color, graphics, and typography to create
packaging that is functional and appealing to clients and consumers. I use
my extended knowledge of Adobe Creative Suite to ensure I use the most
efficient program for the task at hand. I use hierarchy in layouts to
establish the importance of information.
        </p>
      </div>
      <div className='roll'>
        <PicRoll
          pic='/images/CTS Everyday Vue Panel Pair Packaging 1-28-21.jpg'
          pic1='/images/Packaging Mockup.jpg'
          pic2='/images/Packaging.jpg'
        />
      </div>
    </motion.section>
  );
}

export default Packaging;
