import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { ButtonStyle2 } from '../../reusableStyles/buttons/Button';
import NoStyleLink from '../../Links/NoStyleLink';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding-bottom: 4rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 15rem;
  border-bottom: 1rem solid ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const PropertyImage = styled(Image)`
  height: 100%;
  over-flow: hidden;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Logo = styled.div`
  width: 8rem;
  height: 8rem;
  background: ${props => props.theme.colors.black};
  border-radius: 50%;
`;

const Blurb = styled.div`
  width: 90%;
  opacity: 0.9;
  font-size: 1.5rem;
  margin: 1rem;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;

  text-align: center;
`;

const Button = styled(ButtonStyle2)`
  text-transform: uppercase;
`;

export const Property1 = ({ fluid }) => {
  return (
    <Container>
      <ImageContainer>
        <PropertyImage fluid={fluid} />
      </ImageContainer>
      <Logo />
      <Blurb>
        Resident by resident, we look to provide living space for the everyday
        person. At Blue Quill Pointe, we are committed to delivering
        comfortable, quiet and peaceful living with an emphasis on providing
        positive customer service experiences.
      </Blurb>
      <NoStyleLink to="/blue-quill-pointe">
        <Button>Take a Tour</Button>
      </NoStyleLink>
    </Container>
  );
};
