import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16rem;
  height: 16rem;
  border-radius: 8px;
  margin: 2rem;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  & :hover {
    background: ${props => props.theme.colors.primaryDark};
  }
`;

export const LayoutComponent2 = ({ title }) => {
  return <Container>{title}</Container>;
};
