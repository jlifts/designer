import React from 'react';
import Skills from '../../components/Skills';
import Header from '../../components/Header';
import PicRoll from '../../components/PicRoll';
import { motion } from 'framer-motion';

//Pictures

function LogoDesign() {
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
          <Header infoTitle='LOGO DESIGNS' />
        </div>
        <div className='skillz'>
          <Skills
            skill='Communication'
            skill1='Typeography'
            skill2='Creativity'
          />
        </div>
        <p className='info'>
          I am highly experienced in creating distinctive brandings that represents
companies or products. I use graphical and typographical symbols that
represent the company or product in presentations and on websites and
packaging. During the course of design development, I confer with clients
to discuss concepts, prepare initial sketches of ideas, and layout the logo
design, often using computer illustration software. I collaborate with
other professionals in departments like marketing, website management,
and communication to ensure product quality and timely delivery.
        </p>
      </div>
      <div className='roll'>
        <PicRoll
          pic='/images/Eclipse Decor Logo-03.jpg'
          pic1='/images/Josh Burgess Logo.svg'
          pic2='/images/Logo Design 2.jpg'
          pic3='/images/Logo Design.jpg'
          pic4='/images/Taylor Lasher Creations Logo.svg'
        />
      </div>
    </motion.section>
  );
}

export default LogoDesign;
