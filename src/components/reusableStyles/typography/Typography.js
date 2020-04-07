import styled from '@emotion/styled';

const H1 = styled.h1`
  font-size: 5rem;
  font-family: Roboto;
  text-align: center;
  color: ${props => props.theme.colors.primary};
  text-shadow: -3px 3px 0 rgba(10, 14, 39, 0.1);
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    font-size: 4rem;
  }
`;

const ProductPageH1 = styled.h1`
  font-size: 4rem;
  font-style: italic;
  color: ${props => props.theme.colors.primary};
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    text-align: center;
    font-size: 3.4rem;
  }
`;

const H2 = styled.h2`
  font-size: 3.5rem;
  font-family: Lobster;
  color: ${props => props.theme.colors.primary};
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    text-align: center;
    font-size: 3rem;
  }
`;

const H2Centered = styled(H2)`
  text-align: center;

  margin: 2rem 0;
`;

const H3 = styled.h3`
  font-size: 2.4rem;
`;

const H2CenteredLight1 = styled(H2Centered)`
  font-weight: 500;
`;

const H2CenteredLight2 = styled(H2Centered)`
  font-weight: 500;
  text-transform: uppercase;
`;

const Subtitle = styled.h4`
  font-size: 2.5rem;
  text-align: center;
`;

const A = styled.a`
  color: ${props => props.theme.colors.black};
  text-decoration: none;
`;

const Li = styled.li`
  color: ${props => props.theme.colors.black};
`;

const Ul = styled.ul`
  margin: 1rem 0;
`;

const Bold = styled.span`
  font-weight: bolder;
`;

const Span = styled.span``;

const P = styled.p`
  padding: 1rem 0rem;
  font-family: Montserrat, Roboto, Arial;
  line-height: 2.4rem;
  font-weight: 500;
  font-size: 1.8rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    text-align: center;
  }
`;

const PCenter = styled(P)`
  text-align: center;
`;

const PBasic = styled.p`
  padding: 1rem 0rem;
  font-size: 1.6rem;
`;

const BlockQuote = styled.blockquote`
  color: red;
`;

export {
  H1,
  H2,
  H2Centered,
  Subtitle,
  H2CenteredLight1,
  H2CenteredLight2,
  H3,
  A,
  Li,
  Ul,
  Span,
  Bold,
  PCenter,
  P,
  PBasic,
  ProductPageH1,
  BlockQuote,
};
