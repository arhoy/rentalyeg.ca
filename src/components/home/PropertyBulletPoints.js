import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
`;

const Ul = styled.ul`
  margin: 1rem 1rem;
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

export const PropertyBulletPoints = () => {
  return (
    <Container>
      <Ul>
        <li>
          <span>Large private balconies or patios</span>
        </li>
        <li>
          {' '}
          <span>3 appliances (fridge, stove, and dishwasher)</span>{' '}
        </li>
        <li>
          {' '}
          <span>Conveniently located laundry rooms</span>{' '}
        </li>
        <li>
          {' '}
          <span> Elevators </span>{' '}
        </li>
      </Ul>
      <Ul>
        <li>
          <span>Large private balconies or patios</span>
        </li>
        <li>
          {' '}
          <span>3 appliances (fridge, stove, and dishwasher)</span>{' '}
        </li>
        <li>
          {' '}
          <span>Conveniently located laundry rooms</span>{' '}
        </li>
        <li>
          {' '}
          <span> Elevators </span>{' '}
        </li>
      </Ul>
      <Ul>
        <li>
          <span>Large private balconies or patios</span>
        </li>
        <li>
          {' '}
          <span>3 appliances (fridge, stove, and dishwasher)</span>{' '}
        </li>
        <li>
          {' '}
          <span>Conveniently located laundry rooms</span>{' '}
        </li>
        <li>
          {' '}
          <span> Elevators </span>{' '}
        </li>
      </Ul>
    </Container>
  );
};
