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
  font-size: 1.4rem;
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
  }
`;

const StyledImage2 = styled(Image)`
  min-width: 35rem;
  max-width: 45rem;

  margin: 0 auto;
`;

const ImageSlider = styled.div`
  position: relative;
  overflow: hidden;
  &:hover {
    ${StyledImage2} {
      filter: brightness(50%);
      transform: scale(1.1);
    }
    & .zoom {
      opacity: 0.8;
      transition: all 0.5s ease-in;
      transform: scale(1);
    }
  }
  & .zoom {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: scale(0);
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 5rem;
    height: 5rem;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`;

const CustomP = styled(PBasic)`
  font-size: 2.2rem;
`;

const CustomPHome = styled(PBasic)`
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin-bottom: 2rem;
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
  &.center {
    text-align: center;
  }
`;

const CustomH4 = styled.h4`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.secondary};
  &.center {
    text-align: center;
  }
`;

const CustomButton = styled(ButtonStyle2)`
  border-radius: 0;
  padding: 1.5rem 3rem;
  border-radius: 1rem;
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
  CustomH4,
  CustomPHome,
  CustomButton,
};
