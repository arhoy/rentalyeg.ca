import React from 'react';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'gatsby-image';

import LayoutWestRidge from '../components/layouts/LayoutWestRidge';

import WestparkridgeHook from '../hooks/contentful/properties/WestparkridgeHook';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import {
  Bold,
  P,
  H2,
} from '../components/reusableStyles/typography/Typography';
import {
  Section,
  Container1200,
  SectionGrey,
  ContainerCenterFlex,
} from '../components/reusableStyles/sections/Sections';
import LayoutComponent1 from '../components/reusableStyles/propertySectionLayouts/LayoutComponent1';
import { LayoutComponent2 } from '../components/reusableStyles/propertySectionLayouts/LayoutComponent2';
import SliderContainer2 from '../components/reusableStyles/slider/SliderContainer2';
import ContentfulPropertyReviews from '../components/reviews/ContentfulPropertyReviews';
import { TagContainer, Tag } from '../components/reusableStyles/tags/Tag';

const ImageContainerSlider = styled.div``;

const WestParkRidge = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    fadeIn: false,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data = WestparkridgeHook();

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <RTFBold>{text}</RTFBold>,
    },

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  };

  // pulling out variables from the section
  const {
    title,
    subtitle,
    description: { json },
    pictures,
    addressName,
    community,
    // address: { lat, lon },
    propertyFeatures,
    communityFeatures,
    // community,
    // city,
    smoking,
    tenantParking,
    pets,
    // startingAt,
    reviews,
  } = data;

  const RTFBold = ({ children }) => <Bold>{children}</Bold>;
  const Text = ({ children }) => <P>{children}</P>;

  const StyledImage = styled(Image)`
    border-radius: 1rem;
    max-width: 80rem;
    margin: 0 auto;
    margin-bottom: 2rem;
  `;

  const Main = styled.span`
    padding: 1rem;

    &:before,
    &:after {
      font-size: 8rem;
      position: absolute;
    }
    &:before {
      content: '“';
      left: 0rem;
      top: -2rem;
    }
    &:after {
      content: '”';
      right: 0rem;
    }
  `;

  const CustomTag = styled(Tag)`
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.primary};
    font-size: 1.6rem;
  `;

  const CustomTagContainer = styled(TagContainer)`
    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `;
  return (
    <LayoutWestRidge>
      <Section style={{ paddingTop: '0' }}>
        <LayoutComponent1
          title={title}
          addressName={addressName}
          subtitle={subtitle}
          pictures={pictures}
        />
      </Section>

      <SectionGrey>
        <Container1200>
          <H2>Property Overview</H2>

          <CustomTagContainer>
            <CustomTag>
              {' '}
              Smoking: <Bold>{smoking}</Bold>{' '}
            </CustomTag>
            <CustomTag>
              {' '}
              Pets: <Bold>{pets}</Bold>{' '}
            </CustomTag>
            <CustomTag>
              {' '}
              Parking: <Bold>{tenantParking}</Bold>{' '}
            </CustomTag>
            <CustomTag>
              {' '}
              Community: <Bold>{community}</Bold>{' '}
            </CustomTag>
          </CustomTagContainer>
        </Container1200>
      </SectionGrey>

      <Section style={{ paddingTop: 0, marginTop: '-4rem' }}>
        <Container1200 style={{ position: 'relative' }}>
          <Main>{documentToReactComponents(json, options)}</Main>
        </Container1200>
      </Section>
      <SectionGrey>
        <Container1200>
          <H2>Tour Our Property</H2>
        </Container1200>
      </SectionGrey>
      <Section style={{ paddingTop: 0, marginTop: '-4rem' }}>
        <ImageContainerSlider>
          {/* mapping currently does not work with react slick */}

          <Slider {...settings}>
            {pictures.map((image, i) => (
              <SliderContainer2 key={i}>
                <StyledImage fluid={image.fluid} />
                <span>{image.description}</span>
              </SliderContainer2>
            ))}
          </Slider>
        </ImageContainerSlider>
      </Section>

      <SectionGrey>
        <Container1200>
          <H2>Property Features</H2>
        </Container1200>
      </SectionGrey>
      <Section style={{ paddingTop: 0, marginTop: '-4rem' }}>
        <ContainerCenterFlex>
          {propertyFeatures.map((item, i) => (
            <LayoutComponent2 key={i} title={item} />
          ))}
        </ContainerCenterFlex>
      </Section>
      <SectionGrey>
        <Container1200>
          <H2>Community Features</H2>
        </Container1200>
      </SectionGrey>
      <Section style={{ paddingTop: 0, marginTop: '-4rem' }}>
        <ContainerCenterFlex>
          {communityFeatures.map((item, i) => (
            <LayoutComponent2 key={i} title={item} />
          ))}
        </ContainerCenterFlex>
      </Section>

      <SectionGrey>
        <Container1200>
          <H2>Tenant Reviews</H2>
        </Container1200>
      </SectionGrey>
      <Section style={{ paddingTop: 0, marginTop: '-4rem' }}>
        <Container1200>
          {reviews && <ContentfulPropertyReviews reviews={reviews} />}
        </Container1200>
      </Section>
    </LayoutWestRidge>
  );
};

export default WestParkRidge;
