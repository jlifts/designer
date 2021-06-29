import React from 'react';
import '../styles/Info.scss';
// import Skills from '../components/Skills';
// import Header from '../components/Header';
// import PicRoll from '../components/PicRoll';
// import i from '../Assets/img/cheryl-stone-wash-lifestyle-shot.jpg';
// import i1 from '../Assets/img/CLO 3D Modeling.jpg';
// import i2 from '../Assets/img/Photoshop work copy.jpg';
// import i3 from '../Assets/img/Photoshop work copy2.jpg';
// import i4 from '../Assets/img/Photoshop work.jpg';
// import i5 from '../Assets/img/Photoshopped Lifestyle Image.jpg';
// import i6 from '../Assets/img/Pillow Photography.jpg';
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
      {/* <div className='sidebar'>
        <Header className='upper' infoTitle='PHOTOGRAPHY' />
        <Skills
          className='skillz'
          skill='Adobe Photoshop'
          skill1='Adobe Illustrator'
          skill2='Camera'
        />
        <p className='info'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
          risus, vestibulum non interdum ut, rutrum eget ipsum. Aenean non
          sapien at tortor fermentum ultrices nec ut mi. Pellentesque metus
          arcu, convallis sed est ac, tristique mattis sapien. Curabitur id
          euismod ante. Nam tincidunt sollicitudin ultrices. Duis ipsum felis,
          posuere in hendrerit eget, dictum id sem. Fusce finibus, eros ut
          luctus venenatis, erat risus convallis arcu, in ullamcorper nunc
          mauris ut nisi. Nam pulvinar lacus turpis, et pellentesque urna
          eleifend in. Suspendisse cursus, augue sit amet commodo dignissim,
          enim est lobortis sem, ac rhoncus lorem sem sed odio. Ut elementum
          libero a ullamcorper convallis. Nullam blandit tempus nulla, quis
          maximus nunc vestibulum ac. Etiam at eros eu orci pellentesque
          porttitor. Vivamus augue ligula, efficitur at ipsum et, pharetra
          molestie turpis. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Suspendisse molestie euismod justo, ac pharetra leo
          elementum quis. Pellentesque libero sapien, eleifend convallis
          ullamcorper elementum, sagittis sit amet urna. Duis at dolor non orci
          vehicula tempus lobortis a nunc. Maecenas tristique magna sit amet
          libero bibendum, in rutrum mauris blandit. Pellentesque diam mauris,
          pulvinar eget dapibus sed, ultrices sed nisl. Ut tempor vehicula lacus
          in hendrerit. Nunc pellentesque sagittis tortor eu porta. Nullam eu
          turpis pellentesque, mattis mi laoreet, maximus nulla. Etiam ut justo
          id lorem tincidunt vulputate ac vel justo. Nam iaculis tortor magna,
          nec tincidunt tellus tempus sed. Sed pellentesque hendrerit
          scelerisque. Phasellus facilisis dapibus ipsum, ut euismod massa
          tincidunt in. Aenean rutrum consequat tellus, ut fringilla elit
          ultricies ut. Pellentesque a sodales erat. Etiam nunc tellus, volutpat
          quis sem id, bibendum consectetur tellus.
        </p>
      </div>
      <PicRoll
        className='roll'
        pic={i}
        pic1={i1}
        pic2={i2}
        pic3={i3}
        pic4={i4}
        pic5={i5}
        pic6={i6}
      /> */}
    </motion.section>
  );
}

export default Photography;
