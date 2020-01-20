import React from 'react';
import styled from '@emotion/styled';

import Image from 'gatsby-image';
import NoStyleLink from '../Links/NoStyleLink';

const Title = styled(NoStyleLink)`
  font-size: 3.4rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  text-align: center;
  opacity: 0;
  position: absolute;
  color: ${props => props.theme.colors.white};

  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    text-decoration: underline;
  }
`;

const TitleURL = styled.a`
  font-size: 3.4rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  text-align: center;
  opacity: 0;
  position: absolute;
  color: ${props => props.theme.colors.white};

  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    text-decoration: underline;
  }
`;

const CustomImage = styled(Image)`
  object-fit: contain;
  height: 46vh;
  width: 100%;

  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    height: 45vh;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: ${props => (props.number < 2 ? 'flex-end' : 'flex-start')};

  position: relative;
  cursor: pointer;
  &:hover {
    ${CustomImage} {
      filter: brightness(30%);
      -webkit-filter: brightness(30%);
      -webkit-transition: all 1s ease;
    }

    ${Title}, ${TitleURL} {
      opacity: 1;
    }
  }
`;

export const SectionProperty = ({ item, number, url }) => {
  console.log('ITEM is ', item);
  return (
    <Container number={number}>
      {url ? (
        <TitleURL href={url} target="_blank">
          {item.title}
        </TitleURL>
      ) : (
        <Title to={`/${item.slug}`}>{item.title}</Title>
      )}

      <CustomImage fluid={item.pictures[0].fluid} />
    </Container>
  );
};
