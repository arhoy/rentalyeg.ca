import React from 'react';
import { Global, css } from '@emotion/core';

import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import CommunityNav from '../navigation/CommunityNav';
import FooterWestRidge from './FooterWestRidge';

// real global scss styles
import '../../scss/main.scss';

const theme = {
  colors: {
    primary: '#2F3E4E',
    primaryDark: '#262D35',
    primaryLight: '#394D62',
    secondary: '#E54D43',
    secondaryDark: '#C6443D',
    secondaryLight: '#F9726B',
    lightgrey: '#F2F2F2',
    lightgrey2: 'rgb(224, 217, 217)',
    white: '#FBFCFC',
    black: '#484848',
    black2: 'rgb(38, 34, 27)',
    blackTransparent: 'rgba(41, 43, 46, 0.3)',
    properGrey: '#808080',
    darkGrey: 'rgb(109, 109, 109)',
    red: 'rgb(218, 18, 31)',
    redTransparent: 'rgb(218, 18, 31,0.8)',
    lightRed: 'rgb(232, 180, 182)',
    blue: 'rgb(19, 73, 178)',
    lightGreen: '#D4EDDA',
    green: 'rgb(31, 90, 46)',
  },
  pageWidth: {
    fixed: '1200px',
    fixedHome: '1200px',
  },
  screenSize: {
    mobileL: '600px',
    mobileS: '400px',
    mobileVS: '300px',
    eightHundred: '800px',
    nineHundred: '900px',
    oneThousand: '1000px',
    fixedStandard: '1200px',
  },
};

const Div = styled.div`
  color: ${props => props.theme.colors.black2};
  overflow-x: hidden;
  display: grid;
  grid-template-columns:
    [full-start] 1fr
    [center-start] repeat(8, [col-start] minmax(min-content, 1fr) [col-end])
    [center-end] 1fr [full-end];
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns:
      [full-start] 0.5fr
      [center-start] repeat(8, [col-start] minmax(min-content, 1fr) [col-end])
      [center-end] 0.5fr [full-end];
  }
`;

const DivFixed = styled.div`
  color: ${props => props.theme.colors.black2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  max-width: 1500px;
  margin: 0 auto;
`;

const NavLayout = styled.header`
  grid-column: center-start/center-end;
`;

const FullNavLayout = styled.header`
  grid-column: full-start/full-end;
`;

const Main = styled.main`
  grid-column: center-start/center-end;
`;

const MainFull = styled.main`
  grid-column: full-start/full-end;
`;

const FooterLayout = styled.footer`
  grid-column: center-start/center-end;
`;

const FullFooterLayout = styled.footer`
  grid-column: full-start/full-end;
`;

const LayoutWestWoodTerrace = ({ children, full }) => {
  const bodyColor = 'white';

  const communityData = {
    address: '75 Woodsmere Close | Fort Saskatchewan AB T8L-0C8',
    phone: '780-306-2335',
    name: 'Westwood Terrace',
    slug: '/westwood-terrace',
    slogan: 'Modern Affordable Housing',
    links: {
      contact: {
        title: 'Contact Us',
        url: 'https://wwt.managebuilding.com/Resident/public/contact',
      },
      home: {
        title: 'Home',
        url: '/',
      },
      applyNow: {
        title: 'Apply Now',
        url: 'https://wwt.managebuilding.com/Resident/apps/rentalapp/',
      },
      phone: {
        title: '780.306.2335',
        url: 'tel:123-456-7890',
      },
    },
  };

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          body {
            background: ${bodyColor};
            margin: 0;
            font-family: Montserrat, Helvetica, Arial, sans-serif;
          }
        `}
      />

      {full ? (
        <ThemeProvider theme={theme}>
          <Div>
            <FullNavLayout>
              <CommunityNav data={communityData}></CommunityNav>
            </FullNavLayout>
            <MainFull>{children}</MainFull>
            <FullFooterLayout>
              <FooterWestRidge />
            </FullFooterLayout>
          </Div>
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme}>
          <NavLayout>
            <CommunityNav data={communityData}></CommunityNav>
          </NavLayout>
          <DivFixed>
            <Main>{children}</Main>
          </DivFixed>
          <FooterLayout>
            <FooterWestRidge />
          </FooterLayout>
        </ThemeProvider>
      )}
    </>
  );
};
LayoutWestWoodTerrace.propTypes = {
  full: PropTypes.bool,
};
LayoutWestWoodTerrace.defaultProps = {
  full: true,
};

export default LayoutWestWoodTerrace;
