import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Bio = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const anim = useAnimation();
  const anims = useAnimation();
  const phone = typeof window !== "undefined" ? window.innerWidth < 380 : null;

  useEffect(() => {
    if (inView || phone) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { type: 'spring', duration: 1, delay: 0.4 },
      });
    } else {
      animation.start({
        opacity: 0,
        y: 100,
      });
    }
  }, [inView]);

  useEffect(() => {
    if (inView || phone) {
      anim.start({
        opacity: 1,
        x: 0,
        transition: { type: 'spring', duration: 1, delay: 1.2 },
      });
    } else {
      anim.start({
        opacity: 0,
        x: 100,
      });
    }
  }, [inView]);

  useEffect(() => {
    if (inView || phone) {
      anims.start({
        opacity: 1,
        transition: { type: 'spring', duration: 1, delay: 1.5 },
      });
    } else {
      anims.start({
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <section className='bio'>
      <h3 className='skew'>About Me</h3>
      <motion.div animate={animation} ref={ref}>
        <img
          className='profile'
          src='images/pic-1.jpg'
          alt='profile'
          height={550}
          width={405}
        />
      </motion.div>
      <div className='bio-container'>
        <div>
          <motion.div animate={anim} ref={ref}>
            <p className='about'>
              Hello! Thank you for visiting my portfolio page, here is some
              background information on how I got started. I received my
              Bachelor’s Degree in Fashion Merchandising from Kent State
              University in 2018. I moved to Fayetteville, NC and found a
              graphic design position with Keeco LLC. With this home fashions
              manufacturing company, I have advanced my digitally creative
              skills by working with Adobe Suites everyday, 40+ hours per week.
              I’ve created logos, videos, packaging and NedGraphics mappings for
              many brands and companies. I have also mastered every part of the
              photo process, from styling to photographing and editing. After
              work, I like to research more aspects of graphic design,
              videography, typography, and photography on Skillshare.com to
              better myself. I am passionate about the textile industry and love
              to apply all aspects of my skill set into the work that I do.
            </p>
          </motion.div>
          <motion.a
            className='circle'
            href="/Taylor Lasher's Resume.pdf"
            download
            animate={anims}
            ref={ref}
          >
            Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Bio;
