import React from 'react';

import { graphql } from 'gatsby';

import LayoutBlueQuillPoint from '../components/layouts/LayoutBlueQuillPoint';

import {
  Section,
  Container1200,
  SectionGrey,
} from '../components/reusableStyles/sections/Sections';
import PropertyInfo from '../components/home/PropertyInfo';
import PropertyAmenities from '../components/home/PropertyAmenities';

import PropertyReview from '../components/home/PropertyReview';
import Map1 from '../components/mapbox/Map1';
import { Section0 } from '../components/_bcp/Section0/_Section0';

import PropertyGallery from '../components/home/PropertyGallery';

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

const WestWoodTerrace = ({ data }) => {
  return (
    <LayoutBlueQuillPoint>
      <Section0 fluid={data.heroImage.childImageSharp.fluid} />

      <Section>
        <Container1200>
          <PropertyInfo />
        </Container1200>
      </Section>
      <SectionGrey>
        <Container1200>
          <PropertyAmenities />
        </Container1200>
      </SectionGrey>
      <Section>
        <PropertyGallery />
      </Section>
      <SectionGrey>
        <Container1200>
          <PropertyReview />
        </Container1200>
      </SectionGrey>
      <Section>
        <Container1200>
          <Map1
            title={`Our Locations`}
            mapStyle="mapbox://styles/arhoy/ck5n2qqyf0i0v1inwxwapkl7c"
            width="100%"
            height="50vh"
          />
        </Container1200>
      </Section>
    </LayoutBlueQuillPoint>
  );
};
export default WestWoodTerrace;
