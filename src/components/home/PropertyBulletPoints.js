import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-item: center;
`;

const Ul = styled.ul`
  font-size: 1.5rem;

  min-width: 25rem;
  margin: 1rem;
  font-weight: bold;
  opacity: 0.85;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    font-size: 1.6rem;
  }
  & li {
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    & span {
      color: ${props => props.theme.colors.black};
      margin-left: 1rem;
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
