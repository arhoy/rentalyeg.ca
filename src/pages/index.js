import React from 'react';

import Layout2 from '../components/layouts/Layout2';
// import {
//   Section,
//   SectionGrey,
// } from '../components/reusableStyles/sections/Sections';

// import AboutUs from '../components/home/AboutUs';

// import Catering from '../components/home/Catering';
// import Contact from '../components/home/Contact';

// import AboutOurFood from '../components/home/AboutOurFood';
import { SectionHero } from '../components/home/SectionHero';

const Home = ({ data }) => {
  return (
    <Layout2 full={true}>
      <SectionHero />
    </Layout2>
  );
};

export default Home;
