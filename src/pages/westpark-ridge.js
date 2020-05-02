import React from 'react';

import { graphql } from 'gatsby';

import LayoutWestRidge from '../components/layouts/LayoutWestRidge';

import {
  Section,
  Container1200,
  SectionGrey,
} from '../components/reusableStyles/sections/Sections';
import PropertyInfo from '../components/home/PropertyInfo';

import PropertyReview from '../components/home/PropertyReview';
import Map1 from '../components/mapbox/Map1';
import { Section0 } from '../components/_wpr/Section0/_Section0';

import PropertyGallery from '../components/home/PropertyGallery';
import { VirtualTour } from '../components/virualTours/VirtualTour';
import { PropertyAmenitiesWPR } from '../components/home/PropertyAmenities/PropertyAmenitiesWPR';

export const query = graphql`
  {
    allContentfulCommunity(filter: { slug: { eq: "westpark-ridge" } }) {
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

const WestRidge = ({ data }) => {
  const property = data.allContentfulCommunity.nodes[0];
  const heroImageFluid = property.section0heroImage.fluid;

  return (
    <LayoutWestRidge>
      <Section0 fluid={heroImageFluid} property={property} />

      <Section>
        <Container1200>
          <PropertyInfo property={property} />
        </Container1200>
      </Section>
      <SectionGrey>
        <Container1200>
          <PropertyAmenitiesWPR property={property} />
        </Container1200>
      </SectionGrey>
      <Section>
        <PropertyGallery property={property} />
      </Section>
      <Section style={{ paddingTop: '0' }}>
        <VirtualTour src={'https://my.matterport.com/show/?m=NAfyFcNPHTp'} />
      </Section>
      {/* <SectionGrey>
        <Container1200>
          <PropertyReview property={property} />
        </Container1200>
      </SectionGrey> */}
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
    </LayoutWestRidge>
  );
};
export default WestRidge;
