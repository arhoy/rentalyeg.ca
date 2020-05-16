import React from 'react';
import styled from '@emotion/styled';

import { Property1, Property2, Property3, Property4 } from './Properties';

const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 2rem;
  justify-items: center;

  padding: 4rem 0;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: 1fr;
  }
`;

export const Section0 = ({ data }) => {
  const property = data.allContentfulCommunity.nodes;

  const bqp = property.filter(data => data.slug === 'blue-quill-pointe')[0];
  const wwt = property.filter(data => data.slug === 'westwood-terrace')[0];
  const wpr = property.filter(data => data.slug === 'westpark-ridge')[0];
  const ryeg = property.filter(data => data.slug === 'rental-yeg')[0];

  return (
    <Container>
      <Property1 property={bqp} />
      <Property2 property={wwt} />
      <Property3 property={wpr} />
      {/* <Property4 property={ryeg} /> */}
    </Container>
  );
};
