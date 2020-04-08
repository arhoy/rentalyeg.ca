import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  outline: none;
  margin: 2rem;
  padding: 4rem;
  min-width: 30rem;
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.properGrey};
  & p {
    margin-bottom: 2rem;
    font-family: 'Lora', Helvetica, Arial, sans-serif;

    font-style: italic;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    margin: 0;
  }
`;

const SubContainer = styled.div`
  display: grid;

  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr 1fr;

  & img {
    grid-row: 1/-1;
    border-radius: 50%;
    width: 7rem;
    margin-right: 2rem;
  }
  & span,
  h4 {
    grid-column: 2/-1;
  }
`;

export const PropertyCard = ({ blurb, img, user, position }) => {
  return (
    <Container>
      <p>{blurb}</p>

      <SubContainer className="users">
        <img alt={``} src={img} />
        <h4>{user}</h4>
        <span>{position}</span>
      </SubContainer>
    </Container>
  );
};
