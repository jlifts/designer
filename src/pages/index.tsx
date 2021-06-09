import React, { useState } from 'react';
import Hero from '../components/Hero';
import Works from '../components/Works';
import Contact from '../components/Contact';
import Bio from '../components/Bio';
import Loading from '../components/Loading';
import { Nav } from '../components/Nav';
import Footer from '../components/Footer';
import { AnimatePresence } from 'framer-motion';
// import HorizontalContainer from '../functions/Horizontal Scrolling';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence>
      {loading ? (
        <Loading setLoading={setLoading} />
      ) : (
        <>
          <Nav />
          <div className='container-fluid'>
            {/* <HorizontalContainer> */}
            <Hero />
            <Works />
            <Contact />
            <Bio />
            {/* </HorizontalContainer> */}
          </div>
          <Footer />
        </>
      )}
    </AnimatePresence>
  );
};
export default Home;
