import React from 'react';

import styled from '@emotion/styled';
import { MdPermPhoneMsg } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { A } from '../reusableStyles/typography/Typography';
import NoStyleLink from '../Links/NoStyleLink';

const Container = styled.div`
  padding: 1rem;
  z-index: 100;

  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  background: linear-gradient(
    ${props => props.theme.colors.primary},
    ${props => props.theme.colors.primaryLight}
  );

  color: ${props => props.theme.colors.white};
`;

const MenuLinks = styled.ul`
  margin-top: 100px;
  list-style: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

const Blurb = styled.div`
  & .light {
    text-align: center;
    font-weight: 300;
    opacity: 0.8;
    margin: 2rem 0;
    font-style: italic;
  }
  & address {
    font-style: normal;
    text-align: center;
  }
  & ${A} {
    font-style: normal;
    text-align: center;
    color: inherit;
  }
  & .address,
  .phone {
    padding: 2rem 0;
    display: flex;
    max-width: 30rem;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
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

const PhoneIcon = styled(MdPermPhoneMsg)`
  color: 'white';
  font-size: 2rem;
  margin-right: 10px;
`;

const AddressIcon = styled(FaMapMarkerAlt)`
  color: 'white';
  font-size: 2rem;
  margin-right: 10px;
`;

export const MobileMenu = ({ data }) => {
  return (
    <Container>
      <MenuLinks>
        <CustomLink to={data.links.home.url}>
          {data.links.home.title}
        </CustomLink>
        <CustomALink
          target="_blank"
          href={data.links.contact.url}
          rel="noopener noreferrer"
        >
          {data.links.contact.title}
        </CustomALink>
        <CustomALink
          rel="noopener noreferrer"
          target="_blank"
          href={data.links.applyNow.url}
        >
          {data.links.applyNow.title}
        </CustomALink>
      </MenuLinks>
      <Blurb>
        <p className="light">{data.slogan}</p>

        <div className="address">
          <AddressIcon /> <address>{data.address}</address>
        </div>

        <div className="phone">
          <PhoneIcon />{' '}
          <A href={data.links.phone.url}>{data.links.phone.title}</A>
        </div>
      </Blurb>
    </Container>
  );
};
