import React from 'react';
import styled from '@emotion/styled';
import { SectionProperty } from './SectionProperty';
import GetAllPropertiesHook from '../../hooks/contentful/properties/GetAllPropertiesHook';

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
      {/* {data.map((item, i) => (
        <SectionProperty key={item.id} item={item} number={i}  />
      ))} */}
      <SectionProperty key={0} item={data[0]} number={0} />
      <SectionProperty
        key={1}
        item={data[1]}
        number={1}
        url={`https://wwt.managebuilding.com/Resident/public/home`}
      />
      <SectionProperty
        key={2}
        item={data[2]}
        number={2}
        url={`https://livetreo.managebuilding.com/Resident/public/home`}
      />
      <SectionProperty
        key={3}
        item={data[3]}
        number={3}
        url={`http://bluequillapartments.ca/`}
      />
    </Container>
  );
};
