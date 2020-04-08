import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { Property1 } from './Properties';

const Container = styled.div`
  max-width: ${props => props.theme.screenSize.oneThousand};
  margin: 0 auto;
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  justify-items: center;
  padding: 4rem 0;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: 1fr;
  }
`;

export const Section0 = () => {
  const data = useStaticQuery(graphql`
    {
      bcp_hero: file(relativePath: { eq: "bcp_hero.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Container>
      <Property1 fluid={data.bcp_hero.childImageSharp.fluid} />
      <Property1 fluid={data.bcp_hero.childImageSharp.fluid} />
      <Property1 fluid={data.bcp_hero.childImageSharp.fluid} />
      <Property1 fluid={data.bcp_hero.childImageSharp.fluid} />
    </Container>
  );
};
