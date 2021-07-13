import React, { useState, useRef, useEffect, MutableRefObject } from 'react';
import Hero from '../components/Hero';
import Works from '../components/Works';
import Contact from '../components/Contact';
import Bio from '../components/Bio';
import Loading from '../components/Loading';
import { Nav } from '../components/Nav';
import Footer from '../components/Footer';
import { AnimatePresence } from 'framer-motion';
// import useWindowSize from '../hook/WindowResize';

const Home = () => {
  const [loading, setLoading] = useState(true);
  // const size = useWindowSize();
  // const app = useRef();
  // const scrollContainer: MutableRefObject<HTMLElement> = useRef();

  // const skewConfig = {
  //   ease: 0.1,
  //   current: 0,
  //   previous: 0,
  //   rounded: 0,
  // };

  // useEffect(() => {
  //   requestAnimationFrame(() => skewScrolling());
  // }, []);

  // const skewScrolling = () => {
  //   skewConfig.current = window.scrollX;

  //   skewConfig.previous +=
  //     (skewConfig.current - skewConfig.previous) * skewConfig.ease;

  //   skewConfig.rounded = Math.round(skewConfig.previous * 100) / 100;

  //   const difference = skewConfig.current - skewConfig.rounded;
  //   const acceleration = difference / size.width;
  //   const velocity = +acceleration;
  //   const skew = velocity * 7.5;

  //   scrollContainer.current.style.transform = `translate3d(0, -${skewConfig.rounded}px, 0) skewX(${skew}deg)`;

  //   requestAnimationFrame(() => skewScrolling());
  // };

  return (
    <AnimatePresence>
      {loading ? (
        <Loading setLoading={setLoading} />
      ) : (
        // <section ref={app}>
        //   <section ref={scrollContainer}>
        <>
          <Nav />
          <div className='wrapper'>
            <div className='container-fluid'>
              <Hero />
              <Works />
              <Contact />
              <Bio />
            </div>
          </div>
          <Footer />
        </>
        //   </section>
        // </section>
      )}
    </AnimatePresence>
  );
};
export default Home;
