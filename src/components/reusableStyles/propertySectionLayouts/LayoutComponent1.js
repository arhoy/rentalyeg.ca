import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

const Container = styled.div`
display: grid;
grid-template-columns: 3fr 6fr;
grid-column-gap: 1rem;
min-height: 60vh;
`;

const SubContainer1 = styled.div`
display:flex;
flex-direction:column;
align-items:center;
  background: ${props => props.theme.colors.lightgrey};

  grid-column: 1/2;
  padding: 2rem;
  & h2 {
    padding: 1rem;
    font-size: 2.3rem;
    text-transform:uppercase;
    font-weight:bold;
  }
  & h4 {
    font-size: 4rem;
    padding: 4rem 1rem;
  }
`;

const SubContainer2 = styled.div`
  background:red;
`;

const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit:cover;
`;

const LayoutComponent1 = ({ title, subtitle, pictures }) => {
  console.log('pictures is ',pictures)
  return <Container>
      <SubContainer1>
      <h2>{title}</h2>
<h4>{subtitle}</h4>
      </SubContainer1>
      <SubContainer2>
        <StyledImage fluid = {pictures[0].fluid}/>
        </SubContainer2>



  </Container>;
};

export default LayoutComponent1;
