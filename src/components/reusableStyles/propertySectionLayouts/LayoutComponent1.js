import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 6fr;
  grid-column-gap: 1rem;
  min-height: 60vh;
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    grid-template-columns: 1fr;
  }
`;

const SubContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.colors.lightgrey};

  grid-column: 1/2;
  padding: 2rem;
  & h2 {
    padding: 1rem;
    font-size: 2.3rem;
    text-transform: uppercase;
    font-weight: bold;
  }
  & h4 {
    font-size: 4rem;
    padding: 4rem 1rem;
  }

  & a,
  a:visited {
    font-weight: bold;
    text-decoration: none;
    color: ${props => props.theme.colors.black};
    & :hover {
      text-decoration: underline;
    }
  }
`;

const SubContainer2 = styled.div`
  background: red;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LayoutComponent1 = ({ title, subtitle, pictures, addressName }) => {
  return (
    <Container>
      <SubContainer1>
        <div>
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
        </div>
        <div>
          <a
            href={`https://www.google.com/maps/place/174+Willow+Way+NW,+Edmonton,+AB+T5T+1C8/@53.5018478,-113.5887172,12.75z/data=!4m5!3m4!1s0x53a02030a6d60e8f:0x3271b8540b789dda!8m2!3d53.5028831!4d-113.5990141`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {addressName}
          </a>
        </div>
      </SubContainer1>
      <SubContainer2>
        <StyledImage fluid={pictures[0].fluid} />
      </SubContainer2>
    </Container>
  );
};

export default LayoutComponent1;
