/* eslint-disable */
import React, { useState } from 'react';

import styled from '@emotion/styled';

import { MobileMenu } from './MobileMenu';

import { MainLinks } from '../Links/CommunityLinks/MainLinks';
import { BurgerBlack } from './BurgerBlack';
import { MobileMenuMain } from './MobileMenuMain';

const Header = styled.header`
  font-weight: bold;
  height: 9vh;
  position: relative;
  z-index: 101;
  background: white;
  color: ${props => props.theme.colors.black};
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: flex;
  }
`;

const HeaderTop = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
`;

const BurgerIconContainer = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  width: 40px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const MainNav = ({ data }) => {
  const [mobileMenuOpen, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(prevState => !prevState);
  };

  return (
    <>
      <Header>
        <HeaderTop>
          <MainLinks data={data} />
          <BurgerIconContainer onClick={mobileMenuHandler}>
            <BurgerBlack open={mobileMenuOpen.toString()} />
          </BurgerIconContainer>
        </HeaderTop>
      </Header>
      {mobileMenuOpen && <MobileMenuMain data={data}></MobileMenuMain>}
    </>
  );
};

export default MainNav;
