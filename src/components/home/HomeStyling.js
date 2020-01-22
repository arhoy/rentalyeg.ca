import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { PBasic, H2 } from '../reusableStyles/typography/Typography';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';

const Container = styled.div`
  padding: 4rem 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 4fr 5fr;
  justify-content: center;
  align-items: center;
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    display: flex;
    flex-direction: column;
  }
`;

const ImageContainer = styled.div``;
const ImageContainerSlider = styled.div`
  max-width: 50rem;
`;
const ImageContainerSlider2 = styled.div`
  width: 100%;
`;

const BlurbContainer = styled.div`
  margin: 3rem;
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    margin: 3rem 0;
  }
`;

const StyledImage = styled(Image)`
  min-width: 35rem;
  max-width: 45rem;
  object-fit: cover;
  margin: 0 auto;
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    margin-top: 2rem;
    min-width: 100vw;
    height: 40rem;
  }
`;

const StyledImage2 = styled(Image)`
  width: 100%;
  height: 100%;

  background-position: center;
  background-size: cover;
  transition: all 0.3s ease-in;
`;

const ImageSlider = styled.div`
  width: 100%;
  height: 50rem;
  overflow: hidden;

  &:hover {
    ${StyledImage2} {
      filter: brightness(50%);
      transform: scale(1.1);
    }
  }
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    height: 40rem;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    height: 30rem;
  }
`;

const CustomP = styled(PBasic)`
  font-size: 2.2rem;
`;

const CustomPHome = styled(PBasic)`
  font-size: 1.7rem;
  line-height: 2.5rem;
  & span {
    transition: all 0.5s ease-in;
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const CustomH2 = styled(H2)`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;

  font-size: 4rem;
`;

const CustomButton = styled(ButtonStyle2)`
  border-radius: 0;
  padding: 1.5rem 3rem;
`;

export {
  Container,
  ImageContainer,
  ImageContainerSlider,
  ImageContainerSlider2,
  BlurbContainer,
  StyledImage,
  ImageSlider,
  StyledImage2,
  CustomP,
  CustomH2,
  CustomPHome,
  CustomButton,
};
