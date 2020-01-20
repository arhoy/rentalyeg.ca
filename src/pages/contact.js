import React from 'react';
import styled from '@emotion/styled';

import BackgroundImage from 'gatsby-background-image';
import Layout from '../components/layouts/Layout';
import { graphql } from 'gatsby';

import { H1, P } from '../components/reusableStyles/typography/Typography.js';

import {
  Section,
  Container1200,
  SectionGrey,
 
} from '../components/reusableStyles/sections/Sections.js';

import Map1 from '../components/mapbox/Map1';
import { ContactCard } from '../components/reusableStyles/cards/ContactCard';

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
        <ContactCard title1={'Blue Quill Pointe'} title2={`Like Us on Facebook`} blurb1= {`Interested in our rental units? Pick up the phone and chat with one of our property managers`} blurb2 = {`Visit our communities on Facebook. Or like our Facebook page below`} link = {`https://business.facebook.com/BlueQuillYEG/?business_id=167614697271218`}
        linkText = {`View Facebook Page`} phoneNumber = {`780-756-7411`} phoneNumberDisplay = {`780.756.7411`} email = {`community@bluequillapartments.ca`} address = {`11615 28 Ave NW, Edmonton, AB T6J 4G2`}
        /> 
      </SectionCustom>

      <SectionCustom>
        <ContactCard title1={'Live Treo'} title2={`Like Us on Facebook`} blurb1= {`Interested in our rental units? Pick up the phone and chat with one of our property managers`} blurb2 = {`Visit our communities on Facebook. Or like our Facebook page below`} link = {`https://business.facebook.com/LiveTreo-Rental-Communities-111380130328006/?business_id=167614697271218`}
        linkText = {`View Facebook Page`} phoneNumber = {`780-306-2337`} phoneNumberDisplay = {`780.306.2337`}
        email = {`community@livetreo.ca`} address = {`Multiple`}
        /> 
      </SectionCustom>
      <SectionCustom>
        <ContactCard title1={'WestPark Ridge'} title2={`Like Us on Facebook`} blurb1= {`Interested in our rental units? Pick up the phone and chat with one of our property managers`} blurb2 = {`Visit our communities on Facebook. Or like our Facebook page below`} link = {`https://www.facebook.com/Westpark-Ridge-Community-102976637840998/`}
            linkText = {`View Facebook Page`} phoneNumber = {`780-306-2335`} phoneNumberDisplay = {`780.306.2335`}
            email = {``} address = {``}
        /> 
      </SectionCustom>

      <SectionCustom>
        <ContactCard title1={'WestWood Terrace'} title2={`Like Us on Facebook`} blurb1= {`Interested in our rental units? Pick up the phone and chat with one of our property managers`} blurb2 = {`Visit our communities on Facebook. Or like our Facebook page below`} link = {`https://business.facebook.com/Westwood-Terrace-Community-108069854065988/?business_id=167614697271218`}
        linkText = {`View Facebook Page`} phoneNumber = {`780-992-0243`} phoneNumberDisplay = {`780.992.0243`}
        email = {``} address = {``}
        /> 
      </SectionCustom>


      <Section>
        <Container1200>
          <Map1
            title={`Our Locations`}
            mapStyle="mapbox://styles/arhoy/ck5n2qqyf0i0v1inwxwapkl7c"
            width="100%"
            height="50vh"
          />
        </Container1200>
      </Section>
    </Layout>
  );
};

export default contact;
