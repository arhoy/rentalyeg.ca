import React from 'react';
import styled from '@emotion/styled';
import { CustomH4, CustomH2 } from '../home/HomeStyling';

const Section = styled.div``;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  & iframe {
    width: 853px;
    height: 480px;
    @media (max-width: 853px) {
      width: 100%;
      height: auto;
    }
  }
`;

export const VirtualTour = ({ src, hidden }) => {
  return (
    <Section>
      {!hidden && (
        <TitleContainer>
          <CustomH4>Come See Our</CustomH4>
          <CustomH2 className="centered">Virtual Tours</CustomH2>
        </TitleContainer>
      )}

      <Container>
        <iframe
          title="iframe-vt"
          src={src}
          frameBorder="0"
          allowFullScreen
          allow="vr"
        ></iframe>
      </Container>
    </Section>
  );
};
