import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Works from '../components/Works';
import Contact from '../components/Contact';
import Bio from '../components/Bio';
import Loading from '../components/Loading';
import { Nav } from '../components/Nav';
import Footer from '../components/Footer';
import { AnimatePresence } from 'framer-motion';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [firstTime, setFirstTime] = useState(false);

  useEffect(() => {
    const expire = 1;
    const time = new Date().getTime();
    const object = {
      firstTime: false,
      expires: time,
      Message: "If you are seeing this please send an email my way tayloralasher@gmail.com"
    }
    const local = localStorage.getItem("tayler-lasher-creations")
    const expires = JSON.parse(local);
    if(!local){
      setFirstTime(true);
      localStorage.setItem("taylor-lasher-creations", JSON.stringify(object)) 
    } else {
      if(time-expires.expires > expire*60*60*1000){
          localStorage.clear()
          localStorage.setItem("taylor-lasher-creations", JSON.stringify(object))
      }
      setFirstTime(false)
    }  
  },[])

  return (
    <AnimatePresence>
      {loading && firstTime ? (
        <Loading setLoading={setLoading} />
      ) : (
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
      )}
    </AnimatePresence>
  );
};
export default Home;
