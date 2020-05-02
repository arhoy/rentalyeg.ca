import React from 'react';
import { Global, css } from '@emotion/core';

import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// real global scss styles
import '../../scss/main.scss';
import MainNav from '../navigation/MainNav';
import FooterCommunity from './FooterCommunity';

const communityData = {
  address: ' 11615 28 Ave NW, Edmonton, AB T6J 4G2',
  phone: '780-306-2335',
  name: 'Live Treo',
  slug: '/',
  slogan: 'Join Our Communities',
  styles: {
    footer: {
      phoneColor: '#0371E3',
      heading: '#0371E3',
    },
  },
  links: {
    contact: {
      title: 'Contact Us',
      url: 'https://livetreo.managebuilding.com/Resident/public/contact',
    },
    home: {
      title: 'Home',
      url: '/',
    },
    applyNow: {
      title: 'Apply Now',
      url: 'https://livetreo.managebuilding.com/Resident/apps/rentalapp/',
    },
    phone: {
      title: '780.306.2335',
      url: 'tel:123-456-7890',
    },
    fb: {
      title: 'www.facebook.com',
      url: 'https://www.facebook.com/',
    },
    insta: {
      title: 'www.instagram.com',
      url: 'https://www.instagram.com/',
    },
    twitter: {
      title: 'twitter',
      url: 'https://twitter.com/home',
    },
  },
};

const theme = {
  colors: {
    primary: '#0371E3',
    primaryDark: '#085EB4',
    primaryLight: '#2891FA',
    green: '#81B241',
    lightGreen: '#B0E26E',
    red: '#E54D43',
    lightRed: '#F67973',
    blue: '#55BBCC',
    lightBlue: '#9CDDE7',
    orange: '#EEA940',
    lightOrange: '#ECC07D',
    white: '#FFFFFF',
    lightgrey: '#F2F2F2',
    lightgrey2: 'rgb(224, 217, 217)',
    black: 'rgb(19, 20, 21)',
    black2: 'rgb(38, 34, 27)',
    blackTransparent: 'rgba(41, 43, 46, 0.3)',
    darkGrey: 'rgb(109, 109, 109)',
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

const Layout = ({ children, full }) => {
  const bodyColor = '#F9F9F9';

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
              <MainNav data={communityData}></MainNav>
            </FullNavLayout>
            <MainFull>{children}</MainFull>
            <FullFooterLayout>
              <FooterCommunity data={communityData} color="#0371E3" />
            </FullFooterLayout>
          </Div>
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme}>
          <NavLayout>
            <MainNav data={communityData}></MainNav>
          </NavLayout>
          <DivFixed>
            <Main>{children}</Main>
          </DivFixed>
          <FooterLayout>
            <FooterCommunity data={communityData} color="#0371E3" />
          </FooterLayout>
        </ThemeProvider>
      )}
    </>
  );
};
Layout.propTypes = {
  full: PropTypes.bool,
};
Layout.defaultProps = {
  full: true,
};

export default Layout;
