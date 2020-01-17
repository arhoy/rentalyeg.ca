import React from 'react';
import styled from '@emotion/styled';
import { FaPhoneSquare, FaFacebookSquare } from 'react-icons/fa';
import BackgroundImage from 'gatsby-background-image';
import Layout from '../components/layouts/Layout';
import { graphql } from 'gatsby';

import { H1, P } from '../components/reusableStyles/typography/Typography.js';

import {
  Section,
  Container800,
  SectionGrey,
  Container1200,
} from '../components/reusableStyles/sections/Sections.js';
import { NetlifyFormV2 } from '../components/forms/NetlifyFormV2';
import Map1 from '../components/mapbox/Map1';

const SectionCustom = styled(SectionGrey)`
  background: rgba(235, 229, 229, 0);
  margin-top: -4rem;
  padding-top: 0;
`;

const HeroBackgroundImage = styled(BackgroundImage)`
  min-height: ${props => (props.home ? 'calc(100vh - 62px)' : '40vh')};

  background: ${props =>
    props.home
      ? 'linear-gradient(rgba(96, 80, 233, 0.7), rgb(235, 229, 229))'
      : 'linear-gradient(to right bottom, rgba(162, 245, 250,0.5),rgb(235, 229, 229))'};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;

const Title = styled(H1)`
  color: ${props => props.theme.colors.black};
  font-weight: bold;
`;

const CustomContainer = styled(Container1200)`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: 1fr;
  }
`;

const Card1 = styled.div`
  -webkit-box-shadow: inset -16px -23px 22px -10px rgba(240, 240, 240, 0.88);
  -moz-box-shadow: inset -16px -23px 22px -10px rgba(240, 240, 240, 0.88);
  box-shadow: inset -16px -23px 22px -10px rgba(240, 240, 240, 0.88);
  z-index: 10;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  text-align: center;
  background: ${props => props.theme.colors.lightgrey};
  & h4 {
    text-transform: uppercase;
    font-weight: bold;
  }
  & ${P} {
  }
  & span {
    color: ${props => props.theme.colors.primaryDark};
  }
`;

const Card2 = styled(Card1)``;

const StyledPhone = styled(FaPhoneSquare)`
  font-size: 5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.black2};
`;

const StyledFB = styled(FaFacebookSquare)`
  font-size: 5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.black2};
`;

export const query = graphql`
  {
    picture1: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const contact = ({ data }) => {
  return (
    <Layout>
      <HeroBackgroundImage fluid={data.picture1.childImageSharp.fluid}>
        <SubDiv>
          <Title>Get In Touch</Title>
          <P>
            {' '}
            Want to contact us? We'd love to hear from you. Here's how you can
            reach us...
          </P>
        </SubDiv>
      </HeroBackgroundImage>

      <SectionCustom>
        <CustomContainer>
          <Card1>
            <StyledPhone />
            <h4>Talk Or Text</h4>
            <P>
              Interested in our rental units? Pick up the phone and chat with
              one of our property managers
            </P>
            <span>780.756.7411</span>
          </Card1>
          <Card2>
            <StyledFB />
            <h4>Like Us On Facebook</h4>
            <P>
              Visit our communities on Facebook. Or like our Facebook page below
            </P>
            <a
              target={`_blank`}
              href="https://business.facebook.com/rentalyegca-107507547455122/?business_id=167614697271218"
            >
              Rental YEG
            </a>
          </Card2>
        </CustomContainer>
      </SectionCustom>

      <SectionCustom>
        <CustomContainer>
          <Card1>
            <StyledPhone />
            <h4>Talk Or Text</h4>
            <P>
              Interested in our rental units? Pick up the phone and chat with
              one of our property managers
            </P>
            <span>780.756.7411</span>
          </Card1>
          <Card2>
            <StyledFB />
            <h4>Like Us On Facebook</h4>
            <P>
              Visit our communities on Facebook. Or like our Facebook page below
            </P>
            <a
              target={`_blank`}
              href="https://business.facebook.com/rentalyegca-107507547455122/?business_id=167614697271218"
            >
              Blue Quill Pointe
            </a>
          </Card2>
        </CustomContainer>
      </SectionCustom>

      <Section>
        <Container800>
          <Map1
            title={`Our Location`}
            mapStyle="mapbox://styles/arhoy/ck2ktklfm3o8b1co185ptfskc"
            width="100%"
            height="50vh"
          />
        </Container800>
      </Section>
    </Layout>
  );
};

export default contact;
