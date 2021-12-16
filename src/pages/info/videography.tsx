import React from 'react';
import Skills from '../../components/Skills';
import Header from '../../components/Header';
import PicRoll from '../../components/PicRoll';
import { motion } from 'framer-motion';

//Pictures

function Videography() {
  return (
    <motion.section
      className='info-video'
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 70 }}
      transition={{ default: { duration: 1.3 } }}
    >
      <div className='sidebar-video'>
        <div className='upper'>
          <Header infoTitle='VIDEOGRAPHY' />
        </div>
        <div className='skillz'>
          <Skills
            skill='Camera Operation'
            skill1='Lighting'
            skill2='Editing'
          />
        </div>
        <p className='info'>
          I am creative and passionate about creating stories and messages
through the video and editing processes. Along with my eye for detail, I
have good communication skills and the ability to provide direction. I
understand each project’s goal and am able to capture those ideas on
video and turn that into a powerful message.
        </p>
      </div>
      <div className='video-section'>
        <div className='video-section'>
          <div className='video-section'>
            <video
                className='a-video '
                loop
                autoPlay
                muted
                src='/videos/Fluff1.mp4' 
                height={630}
                width={630}
                />
          </div>
          </div>
      </div>
    </motion.section>
  );
}

export default Videography;
