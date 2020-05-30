import styled from '@emotion/styled';
import { ButtonStyleWhiteHero } from '../buttons/Button';
import { keyframes } from '@emotion/core';
import { H1 } from '../typography/Typography';
const fadeInDown = keyframes`
from {
  opacity: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}

to {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
`;
export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;

  color: ${props => props.theme.colors.white};

  margin: 0 auto;

  padding: 3rem;
  border-top-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  & ${H1} {
    color: ${props => props.theme.colors.white};
    font-weight: 100;
    text-transform:uppercase;
    text-align:left;
    @media(max-width:600px) {
        font-size:3rem;
    }
    animation: ${fadeInDown} 0.4s;
     & span {
       display:block;
     }

      (max-width: ${props => props.theme.screenSize.mobileL}) {
      font-size: 3rem;
      line-height:2.9rem;
    
    }
  }


  & address {
    font-weight: 500;
    padding: 2rem 0;
    animation: ${fadeInDown} 0.3s;
    animation-fill-mode: both;
    animation-delay: .7s;
    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      display: none;
    }
  }
  & ${ButtonStyleWhiteHero} {
   
    animation: ${fadeInDown} 0.2s;
    animation-fill-mode: both;
    animation-delay: 1s;
    align-self:flex-start;
  }
`;
