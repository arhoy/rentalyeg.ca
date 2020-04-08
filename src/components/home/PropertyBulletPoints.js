import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: grid;
  }
`;

const Ul = styled.ul`
  margin: 1rem;
  margin-right: 1.6rem;
  font-size: 1.4rem;
  font-weight: bold;
  opacity: 0.85;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    font-size: 1.6rem;
  }
  & li {
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 10px;
    & span {
      color: ${props => props.theme.colors.black};
    }
  }
`;

export const PropertyBulletPoints = ({ property }) => {
  return (
    <Container>
      <Ul>
        {property.section2bulletsA.map((item, i) => (
          <li key={i}>
            <span>{item}</span>
          </li>
        ))}
      </Ul>
      <Ul>
        {property.section2bulletsB.map((item, i) => (
          <li key={i}>
            <span>{item}</span>
          </li>
        ))}
      </Ul>
      <Ul>
        {property.section2bulletsC.map((item, i) => (
          <li key={i}>
            <span>{item}</span>
          </li>
        ))}
      </Ul>
    </Container>
  );
};
