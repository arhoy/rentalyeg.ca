import styled from '@emotion/styled';

const ButtonStyle1 = styled.button`
  outline: none;
  margin: 1rem 0;
  border: none;
  padding: 0.7rem 1rem;
  border: 3px solid ${props => props.theme.colors.primary};
  background: transparent;
  cursor: pointer;
  border-radius: 1rem;
  &:hover {
    font-weight: bold;
  }
`;

const ButtonStyle2 = styled.button`
  outline: none;
  border: none;
  padding: 0.9rem 2rem;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.secondary};
  font-weight: bold;
  cursor: pointer;
  border-radius: 1rem;

  &:hover {
    font-weight: bold;
    background: ${props => props.theme.colors.secondaryDark};
  }
  & a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
  }
`;

const ButtonStyle3 = styled.button`
  text-transform: uppercase;
  outline: none;
  margin: 1.2rem 0.5rem;
  border: none;
  padding: 1.5rem 2.5rem;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.primary};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    background: ${props => props.theme.colors.primaryDark};
  }
  & a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
  }
`;

const ButtonStyle2Large = styled(ButtonStyle2)`
  padding: 1rem 2rem;
  font-size: 2rem;
`;

const ButtonStyleWhiteHero = styled.button`
  padding: 2rem 4rem;
  background: white;
  color: ${props => props.theme.colors.secondary};
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  transition: a11 0.3s ease;
  &:hover {
    box-shadow: 0 1rem 1rem -0.4em ${props => props.theme.colors.black};
  }
`;

export {
  ButtonStyle1,
  ButtonStyle2,
  ButtonStyle2Large,
  ButtonStyle3,
  ButtonStyleWhiteHero,
};
