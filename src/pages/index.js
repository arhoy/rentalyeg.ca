import React from 'react';

import { graphql } from 'gatsby';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Layout2 from '../components/layouts/Layout2';
import {
  Section,
  SectionGrey,
} from '../components/reusableStyles/sections/Sections';

import AboutUs from '../components/home/AboutUs';

import Catering from '../components/home/Catering';
import Contact from '../components/home/Contact';

import AboutOurFood from '../components/home/AboutOurFood';
import { SectionHero } from '../components/home/SectionHero';

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Home = ({ data }) => {
  return (
    <Layout2 full={true}>
      <SectionHero />
    </Layout2>
  );
};

export default Home;
