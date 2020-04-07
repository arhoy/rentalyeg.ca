import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import {
  Container,
  BlurbContainer,
  CustomH2,
  CustomH4,
  ImageContainer,
  StyledImage,
  CustomPHome,
  CustomButton,
} from './HomeStyling';

import NoStyleLink from '../Links/NoStyleLink';

const PropertyInfo = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "bcp_2.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Container>
      <ImageContainer>
        <StyledImage fluid={image.sharp.fluid} fadeIn={true} />
      </ImageContainer>
      <BlurbContainer>
        <CustomH4>Everyday Living at </CustomH4>
        <CustomH2>Blue Quill Pointe in Southwest Edmonton</CustomH2>

        <CustomPHome>
          Resident by resident, we look to provide living space for the everyday
          person. At Blue Quill Pointe, we are committed to delivering
          comfortable, quiet and peaceful living with an emphasis on providing
          positive customer service experiences. Our goal is to provide a
          friendly and safe environment for you to call home. We promise you our
          full attention and trustworthy experts to find your home and more
          importantly, create a happy and meaningful experience. Why? It’s
          simple: happy home, happy life.
        </CustomPHome>

        <CustomButton>
          <NoStyleLink to="/contact">Get Details</NoStyleLink>
        </CustomButton>
      </BlurbContainer>
    </Container>
  );
};

export default PropertyInfo;
