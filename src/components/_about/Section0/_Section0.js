import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';

import Image from 'gatsby-image';

const Container = styled.div`
  display: grid;
  margin: 8rem auto;
  padding: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  max-width: 1200px;
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    grid-template-columns: 1fr;
  }
`;

const ContentContainer = styled.div``;

const ImageContainer = styled.div``;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  min-width: 40rem;
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    min-width: 100%;
  }
`;

const TitleContainer = styled.div`
  h2 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 38px;
    line-height: 46px;
    text-transform: uppercase;

    /* 0371E3 */

    color: #0371e3;
  }
  h4 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    text-transform: uppercase;

    /* F18649 */

    color: #f17249;
  }
`;

const Blurb = styled.div`
  & p {
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 27px;
    /* or 159% */

    /* Body 2 */

    color: #333333;
    margin: 2rem 0;
  }
`;

export const Section0 = ({ data }) => {
  const contentfulData = useStaticQuery(graphql`
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
        }
      }
    }
  `);

  const property = contentfulData.allContentfulCommunity.nodes[0];

  return (
    <Container>
      <ImageContainer>
        <StyledImage fluid={property.section0heroImage.fluid} />
      </ImageContainer>
      <ContentContainer>
        <TitleContainer>
          <h4>The LiveTreo Promise</h4>
          <h2>Who we are</h2>
        </TitleContainer>
        <Blurb>
          <p>
            LiveTreo aims to serve people from all walks and all backgrounds. We
            pride ourselves on delivering quality spaces to live that fit your
            everyday needs. We are creating communities people love and are
            happy to call home.
          </p>
          <p>
            Our team of experts ensures that we are accountable and attentive to
            all of our resident’s needs. We strive to make you feel like this is
            your forever home we have built our communities with that in mind.
            With large, pet friendly suits that are situated conveniently to
            transit, we provide a well maintained and affordable living space
            for you and your family.
          </p>
          <p>
            Our promise, is to treat every individual with the full respect and
            kindness they deserve. Let’s find your new home together.
          </p>
        </Blurb>
      </ContentContainer>
    </Container>
  );
};
