import React from 'react';
import styled from '@emotion/styled';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import NoStyleLink from '../Links/NoStyleLink';
import { NetlifyFormV2 } from '../forms/NetlifyFormV2';

const d = new Date().getFullYear();

const Container = styled.div`
  background: #333333;
  color: ${props => props.theme.colors.white};
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-family: Montserrat;
  .socialIcons {
    font-size: 2.5rem;
    margin-right: 1rem;
  }
`;

const Menu = styled.ul`
  display: grid;
  width: 100%;

  grid-template-columns: 6fr 3fr;
  grid-column-gap: 2rem;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const MenuLHS = styled.div`
  @media (min-width: ${props => props.theme.screenSize.mobileL}) {
    margin: 0 2rem;
  }
`;

const MenuRHS = styled.div`
  display: grid;
  color: ${props => props.theme.colors.lightgrey};
  grid-template-columns: repeat(1fr);

  justify-content: center;
  width: 100%;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${props => props.theme.screenSize.mobileS}) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
`;
const SocialIconContainer = styled.div``;
const SocialIcon = styled.a`
  color: ${props => props.theme.colors.lightgrey};
  font-size: 3rem;
  margin-right: 1rem;
`;

const LinkColumnContainers = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 1.5rem;
`;

const LinkContainers = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  padding: 1rem;
`;

const LinkHeaders = styled.h6`
  font-size: 13px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 1rem;
  line-height: 16px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: #ffffff;
  &.bold {
    font-weight: bold;
    font-size: 17px;
  }
`;
const LinkHeadersPrimary = styled(LinkHeaders)`
  & a {
    text-decoration: none;
    color: ${props =>
      props.color ? props.color : props.theme.colors.secondary};
  }
  font-size: 2.5rem;
  font-weight: 700;
  font-size: 3rem;
`;

const CustomLinks = styled(NoStyleLink)`
  display: inline-block;
  clear: both;
  float: left;
  text-decoration: none;
  width: max-content;

  position: relative;
  overflow: hidden;
  color: ${props => props.theme.colors.white};
  &::before {
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
  display: inline-block;
  clear: both;
  float: left;
  text-decoration: none;
  width: max-content;

  position: relative;
  overflow: hidden;
  color: ${props => props.theme.colors.white};
  &::before {
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

const A = styled.a`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.lightgrey};
  text-decoration: none;
`;
const Attribution = styled.p`
  margin-top: 2rem;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

const FooterCommunity = ({ data, color }) => {
  return (
    <Container>
      <Menu>
        <MenuLHS>
          <NetlifyFormV2 color={color} />
        </MenuLHS>
        <MenuRHS>
          <LinkColumnContainers>
            <LinkContainers>
              <LinkHeaders>Text Or Call</LinkHeaders>
              <LinkHeadersPrimary color={color}>
                <a href={data.links.phone.url}> {data.links.phone.title}</a>
              </LinkHeadersPrimary>
            </LinkContainers>
            <LinkContainers>
              <CustomLinks to="/">Home</CustomLinks>
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
            </LinkContainers>
          </LinkColumnContainers>

          <LinkColumnContainers>
            <LinkContainers>
              <LinkHeaders className="bold">Support</LinkHeaders>
              <CustomLinks to="/contact">Report an issue</CustomLinks>
              <CustomLinks to="/privacy-policy">Privacy Policy</CustomLinks>
              <CustomLinks to="/terms-and-conditions">
                Terms & Conditions
              </CustomLinks>
            </LinkContainers>
            <LinkContainers>
              <LinkHeaders className="bold">Follow Us</LinkHeaders>
              <SocialIconContainer>
                <SocialIcon
                  href={data.links.fb.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="socialIcons" />
                </SocialIcon>
                <SocialIcon
                  href={data.links.insta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="socialIcons" />
                </SocialIcon>
                <SocialIcon
                  href={data.links.fb.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="socialIcons" />
                </SocialIcon>
              </SocialIconContainer>
            </LinkContainers>
          </LinkColumnContainers>
        </MenuRHS>
      </Menu>

      <Attribution>
        <A
          target="_blank"
          rel="noopener noreferrer"
          href="https://rentalyeg.com/"
        >
          Rental YEG {d} &copy;
        </A>
      </Attribution>
    </Container>
  );
};

export default FooterCommunity;
