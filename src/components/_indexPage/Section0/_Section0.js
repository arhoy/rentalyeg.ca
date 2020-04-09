import React from 'react';
import styled from '@emotion/styled';

import { Property1, Property2, Property3, Property4 } from './Properties';

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

export const Section0 = ({ data }) => {
  const property = data.allContentfulCommunity.nodes;
  console.log('preotry', property[0]);
  return (
    <Container>
      <Property1 property={property[0]} />
      <Property2 property={property[2]} />
      <Property3 property={property[3]} />
      <Property4 property={property[1]} />
    </Container>
  );
};
