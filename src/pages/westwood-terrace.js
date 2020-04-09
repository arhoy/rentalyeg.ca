import React from 'react';

import { graphql } from 'gatsby';

import {
  Section,
  Container1200,
  SectionGrey,
} from '../components/reusableStyles/sections/Sections';
import PropertyInfo from '../components/home/PropertyInfo';
import PropertyAmenities from '../components/home/PropertyAmenities';

import PropertyReview from '../components/home/PropertyReview';
import Map1 from '../components/mapbox/Map1';
import { Section0 } from '../components/_wwt/Section0/_Section0';

import PropertyGallery from '../components/home/PropertyGallery';
import LayoutWestWoodTerrace from '../components/layouts/LayoutWestwoodTerrace';

export const query = graphql`
  {
    allContentfulCommunity(filter: { slug: { eq: "westwood-terrace" } }) {
      nodes {
        slug
        title
        section0heroImage {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        section0Title
        addressName
        section1subtitle
        section1title
        section1blurb {
          id
          json
        }
        section1picture {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        section2title
        section2blurb {
          section2blurb
        }
        section2list
        section2bulletsA
        section2bulletsB
        section2bulletsC
        section3gallery {
          title
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        section3galleryTitle
        section3gallerySubtitle
        section4reviewsTitle
        section4reviewSubtitle
        section4reviewsOnCommunity {
          reviewerName
          reviewerPosition
          childContentfulCommunityReviewsDescriptionTextNode {
            description
          }
          reviewImage {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
        section5locationTitle
        section5locationSubtitle
        section5mapCoordinates {
          lon
          lat
        }
      }
    }
  }
`;

const WestWoodTerrace = ({ data }) => {
  const property = data.allContentfulCommunity.nodes[0];
  const heroImageFluid = property.section0heroImage.fluid;

  return (
    <LayoutWestWoodTerrace>
      <Section0 fluid={heroImageFluid} property={property} />

      <Section>
        <Container1200>
          <PropertyInfo property={property} />
        </Container1200>
      </Section>
      <SectionGrey>
        <Container1200>
          <PropertyAmenities property={property} />
        </Container1200>
      </SectionGrey>
      <Section>
        <PropertyGallery property={property} />
      </Section>
      <SectionGrey>
        <Container1200>
          <PropertyReview property={property} />
        </Container1200>
      </SectionGrey>
      <Section>
        <Container1200>
          <Map1
            title={`Our Locations`}
            mapStyle="mapbox://styles/arhoy/ck5n2qqyf0i0v1inwxwapkl7c"
            width="100%"
            height="50vh"
            property={property}
          />
        </Container1200>
      </Section>
    </LayoutWestWoodTerrace>
  );
};
export default WestWoodTerrace;
