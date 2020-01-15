import React from 'react';
import styled from '@emotion/styled';
import { SectionProperty } from './SectionProperty';
import GetAllPropertiesHook from '../../hooks/contentful/products/menu/getAllMenuItemsHook';

const Container = styled.div`
  background: ${props => props.theme.colors.black2};
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  height: 92vh;
  margin-top: -2rem;
  grid-gap: 1rem;
  grid-column-gap: 2rem;
  @media (max-width: ${props => props.theme.screenSize.oneThousand}) {
    width: 100%;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    width: 100%;
    height: auto;
  }
`;

export const SectionHero = () => {
  const data = GetAllPropertiesHook();

  return (
    <Container>
      {data.slice(0, 4).map((item, i) => (
        <SectionProperty key={item.id} item={item} number={i} />
      ))}
    </Container>
  );
};
