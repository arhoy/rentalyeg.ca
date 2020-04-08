import React from 'react';
import styled from '@emotion/styled';
import {
  Container,
  BlurbContainer,
  CustomH2,
  CustomH4,
  ImageContainer,
  StyledImage,
  CustomButton,
} from './HomeStyling';

import NoStyleLink from '../Links/NoStyleLink';

import { BLOCKS } from '@contentful/rich-text-types';
// RICH TEXT
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// styled p
const ArticleP = styled.p`
  padding: 1rem 0rem;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2.2rem;
  opacity: 0.85;
`;

const Text = ({ children }) => <ArticleP>{children}</ArticleP>;

const PropertyInfo = ({ property }) => {
  const { json } = property.section1blurb;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  };
  return (
    <Container>
      <ImageContainer>
        <StyledImage fluid={property.section1picture.fluid} fadeIn={true} />
      </ImageContainer>
      <BlurbContainer>
        <CustomH4>{property.section1subtitle} </CustomH4>
        <CustomH2>{property.section1title} </CustomH2>

        <main>{documentToReactComponents(json, options)}</main>

        <CustomButton>
          <NoStyleLink to="/contact">Get Details</NoStyleLink>
        </CustomButton>
      </BlurbContainer>
    </Container>
  );
};

export default PropertyInfo;
