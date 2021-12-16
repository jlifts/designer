import React from 'react';
import Skills from '../../components/Skills';
import Header from '../../components/Header';
import PicRoll from '../../components/PicRoll';
import { motion } from 'framer-motion';

//Pictures

function Photography() {
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
          <Header infoTitle='PHOTOGRAPHY' />
        </div>
        <div className='skillz'>
          <Skills
            skill='Composition'
            skill1='Hardware'
            skill2='Software'
          />
        </div>
        <p className='info'>
          Through years of photography experience, I have learned to think
creatively but deliberately about what will look good in the frame of the
camera and why. I consider the lighting, patterns, shape, color, balance,
and formatting to construct a unique point of view. To have the greatest
amount of control and options, I am proficient with cameras and lighting
equipment. I am an expert with using Adobe Photoshop to modify and
enhance my photos. With my strong attention to detail, I use my
composition, hardware, and software skills to create one-of-a-kind
images.
        </p>
      </div>
      <div className='roll'>
        <PicRoll
          pic='/images/cheryl-stone-wash-lifestyle-shot.jpg'
          pic1='/images/CLO 3D Modeling.jpg'
          pic2='/images/Photoshop work copy.jpg'
          pic3='/images/Photoshop work copy2.jpg'
          pic4='/images/Photoshop work.jpg'
          pic5='/images/Photoshopped Lifestyle Image.jpg'
          pic6='/images/Pillow Photography.jpg'
        />
      </div>
    </motion.section>
  );
}

export default Photography;
