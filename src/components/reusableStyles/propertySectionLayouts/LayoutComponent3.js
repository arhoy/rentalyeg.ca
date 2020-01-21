import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: inline-block;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  margin: 4px;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 1.6rem;
  text-align: center;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  & :hover {
    background: ${props => props.theme.colors.primaryDark};
  }
`;

export const LayoutComponent3 = ({ title }) => {
  return <Container>{title}</Container>;
};
