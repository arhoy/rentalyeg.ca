import React from 'react';
import styled from '@emotion/styled';

import { Link } from 'gatsby';
import NoStyleLink from '../NoStyleLink';
import { ButtonStyle2 } from '../../reusableStyles/buttons/Button';

const LogoLink = styled(Link)`
  padding: 0;
  margin: 0;
  text-transform: uppercase;
`;

const Logo = styled.span`
  z-index: 100;
  & ${LogoLink} {
    text-decoration: none !important;
    font-weight: bold;
    font-size: 1.8rem;
    letter-spacing: 4px;
    color: ${props => props.theme.colors.white};
  }
`;

const MenuLinks = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  align-items: center;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const CustomLink = styled(NoStyleLink)`
  display: flex;
  text-decoration: none;
  text-transform: uppercase;
  display: inline;
  position: relative;

  font-size: 1.6rem;
  color: ${props => props.theme.colors.white};
  margin: 1rem;
  &::before {
    margin-bottom: -4px;
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: 0px;
    background: ${props => props.theme.colors.white};
    height: 1px;
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  &:hover,
  &:focus,
  &:active {
    &::before {
      left: 0;
      right: auto;
      width: 100%;
    }
  }
`;

const Button = styled(ButtonStyle2)`
  font-size: 1.6rem;
  display: flex;
  background: white;
  &:hover {
    & a {
      color: white;
    }
  }
  a {
    color: ${props => props.theme.colors.primary};
  }
`;

const CustomALink = styled.a`
  white-space: nowrap;
  display: flex;
  text-decoration: none;
  text-transform: uppercase;
  display: inline;
  position: relative;

  font-size: 1.6rem;
  color: ${props => props.theme.colors.white};
  margin: 1rem;
  &::before {
    margin-bottom: -4px;
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: 0px;
    background: ${props => props.theme.colors.white};
    height: 1px;
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  &:hover,
  &:focus,
  &:active {
    &::before {
      left: 0;
      right: auto;
      width: 100%;
    }
  }
`;

export const CommunityLinks = ({ data }) => {
  return (
    <>
      <Logo>
        <LogoLink to={data.slug}>{data.name}</LogoLink>
      </Logo>

      <MenuLinks>
        <CustomLink className="underline" to="/">
          Home
        </CustomLink>
        <CustomALink
          href={data.links.contact.url}
          target={'_blank'}
          rel="noopener noreferrer"
        >
          {data.links.contact.title}
        </CustomALink>
        <CustomALink
          href={data.links.applyNow.url}
          target={'_blank'}
          rel="noopener noreferrer"
        >
          {data.links.applyNow.title}
        </CustomALink>
        <Button>
          <a href={data.links.phone.url}> {data.links.phone.title}</a>
        </Button>
      </MenuLinks>
    </>
  );
};
