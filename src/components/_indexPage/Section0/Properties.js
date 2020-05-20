import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { ButtonStyle2 } from '../../reusableStyles/buttons/Button';

import NoStyleLink from '../../Links/NoStyleLink';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 400px;
  margin: 1rem;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding-bottom: 4rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
`;

const Container2 = styled(Container)`
  grid-column: 1/-1;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: block;

  height: 15rem;
  border-bottom: 1rem solid ${props => props.theme.colors.primary};
  &.green {
    border-bottom: 1rem solid ${props => props.theme.colors.green};
  }
  &.red {
    border-bottom: 1rem solid ${props => props.theme.colors.red};
  }

  &.blue {
    border-bottom: 1rem solid ${props => props.theme.colors.blue};
  }

  &.orange {
    border-bottom: 1rem solid ${props => props.theme.colors.orange};
  }

  margin-bottom: 1rem;
`;

const PropertyImage = styled(Image)`
  height: 100%;
  over-flow: hidden;
  object-fit: contain;
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
  background: ${props => props.theme.colors.lightgrey};
  border-radius: 50%;
`;

const Blurb = styled.div`
  width: 90%;

  margin: 1rem;
  height: 170px;
  display: flex;
  align-items: flex-start;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;

  text-align: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 26px;
`;

const BottomDiv = styled.div`
  min-height: 10rem;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;

const ButtonContainer = styled(NoStyleLink)`
  display: flex;
  justify-self: flex-end;
  align-items: flex-end;
`;

const Button = styled(ButtonStyle2)`
  text-transform: uppercase;
  justify-self: flex-end;
  align-items: flex-end;
  background: ${props => props.theme.colors.primary};
  &.green {
    background: ${props => props.theme.colors.green};
    &:hover {
      background: ${props => props.theme.colors.lightGreen};
    }
  }
  &.blue {
    background: ${props => props.theme.colors.blue};
    &:hover {
      background: ${props => props.theme.colors.lightBlue};
    }
  }
  &.red {
    background: ${props => props.theme.colors.red};
    &:hover {
      background: ${props => props.theme.colors.lightRed};
    }
  }
  &.orange {
    background: ${props => props.theme.colors.orange};
    &:hover {
      background: ${props => props.theme.colors.lightOrange};
    }
  }
`;

const LinkContainer = styled.div`
  & ${ButtonContainer} {
    margin: 2px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  & button {
    outline: none;
    border: none;
    padding: 0.9rem 2rem;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
    border-radius: 1rem;
    text-transform: uppercase;
    background: ${props => props.theme.colors.orange};
    &:hover {
      background: ${props => props.theme.colors.lightOrange};
    }
  }
`;

export const Property1 = ({ property }) => {
  return (
    <Container>
      <ImageContainer className="green">
        <PropertyImage fluid={property.section0heroImage.fluid} />
      </ImageContainer>
      {/* <Logo /> */}
      <h2>Blue Quill Pointe</h2>
      <Blurb>
        Resident by resident, we look to provide living space for the everyday
        person. At Blue Quill Pointe, we are committed to delivering
        comfortable, quiet and peaceful living with an emphasis on providing
        positive customer service experiences.
      </Blurb>
      <BottomDiv>
        <ButtonContainer to={`/${property.slug}`}>
          <Button className="green">Take a Tour</Button>
        </ButtonContainer>
      </BottomDiv>
    </Container>
  );
};

export const Property2 = ({ property }) => {
  return (
    <Container>
      <ImageContainer className="red">
        <PropertyImage fluid={property.section0heroImage.fluid} />
      </ImageContainer>
      {/* <Logo /> */}
      <h2>Westwood Terrace</h2>
      <Blurb>
        Originally constructed in 2008 to be sold as condominiums, Westwood
        Terrace offers one and two bedroom, large, condominium-quality
        apartments. Residents enjoy the quiet, peaceful lifestyle of an adult
        oriented community.
      </Blurb>
      <BottomDiv>
        <ButtonContainer to="/westwood-terrace">
          <Button className="red">Take a Tour</Button>
        </ButtonContainer>
      </BottomDiv>
    </Container>
  );
};

export const Property3 = ({ property }) => {
  return (
    <Container2>
      <ImageContainer className="blue">
        <PropertyImage fluid={property.section0heroImage.fluid} />
      </ImageContainer>
      {/* <Logo /> */}
      <h2>Westpark Ridge</h2>
      <Blurb>
        You won't find better value in the highly sought-after community of
        Patricia Heights than you will at Westpark Ridge. Westpark Ridge is a
        well-maintained complex with on-site management.
      </Blurb>
      <BottomDiv>
        <ButtonContainer to="/westpark-ridge">
          <Button className="blue">Take a Tour</Button>
        </ButtonContainer>
      </BottomDiv>
    </Container2>
  );
};

export const Property4 = ({ property }) => {
  return (
    <Container>
      <ImageContainer className="orange">
        <PropertyImage fluid={property.section0heroImage.fluid} />
      </ImageContainer>
      {/* <Logo /> */}
      <Blurb>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Blurb>
      <BottomDiv>
        <LinkContainer>
          <ButtonContainer to="/diane-manor">
            <button> Diane Manor </button>
          </ButtonContainer>
          <ButtonContainer to="/cypress-manor">
            <button> Cypress Manor </button>
          </ButtonContainer>
          <ButtonContainer to="/pinecrest">
            <button> Pinecrest </button>
          </ButtonContainer>
          <ButtonContainer to="/phillips-apartment">
            <button> Phillips </button>
          </ButtonContainer>
          <ButtonContainer to="/sherwood-manor">
            <button> Sherwood </button>
          </ButtonContainer>
        </LinkContainer>
      </BottomDiv>
    </Container>
  );
};
