import React from 'react';
import styled from '@emotion/styled';
import { Blurb } from './Blurb';

const Section = styled.div`
  background: ${props => props.theme.colors.lightgrey};
  padding: 6rem 0;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    grid-template-columns: 1fr;
  }

  & h2 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 2rem;
    font-weight: 700;
    font-size: 38px;
    line-height: 46px;
    text-transform: uppercase;
  }
  & p,
  & ul {
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 27px;

    color: #333333;
  }
`;

const SubContainer1 = styled.div``;

const SubContainer2 = styled.div``;

const Div = styled.div`
  max-width: 527px;
  margin: 2rem 0;
`;

const Foundation = styled(Div)``;

const OurValues = styled(Div)`
  margin: 2rem 0;
  max-width: 527px;
  ul {
    margin: 2rem;
    color: ${props => props.theme.colors.primary};
    & span {
      color: ${props => props.theme.colors.black};
      font-weight: 700;
    }
  }
  & p {
    margin: 2rem 0;
  }
`;

const Bullets = styled(Div)`
  & p {
    margin: 1rem 0;
  }
  & span {
    font-weight: 700;
    font-style: italic;
    margin-right: 5px;
  }
`;

export const Section1 = () => {
  return (
    <Section>
      <Container>
        <SubContainer1>
          <Foundation>
            <h2>The Foundation</h2>
            <p>
              Live Treo is an organization that is built on the foundation of
              treating every human being with the intrinsic worth we all share.
              Embedded deep in our roots, we pride ourselves on delivering
              fabulous customer experiences by providing quality and safe
              housing for our customers.
            </p>
          </Foundation>

          <OurValues>
            <h2>Our Values</h2>
            <p>
              Our Core Values DO define us, you can say we “Live” it.
              responsible.
            </p>
            <p>
              We believe every human has intrinsic worth, and by embedding that
              belief into our roots and culture we can confidently say we look
              forward to building warming communities.
            </p>
            <p>Here’s our promise to you,</p>
            <p>
              Live Treo promises to hold these core values at the top of our
              priority for our customers.
            </p>
            <ul>
              <li>
                <span>Kind</span>
              </li>
              <li>
                <span>Attentive</span>
              </li>
              <li>
                <span>Expert</span>
              </li>
              <li>
                <span>Accountable</span>
              </li>
              <li>
                <span>Responsive</span>
              </li>
            </ul>
          </OurValues>
          <Bullets>
            <p>
              <span>Kind:</span> of a good or benevolent nature or disposition,
              as a person
            </p>
            <p>
              <span> Attentive:</span>
              Paying Close attention to something.
            </p>
            <p>
              <span>Expert:</span> a person who has a comprehensive and
              authoritative knowledge of or skill in a particular area
            </p>
            <p>
              <span> Accountable:</span>
              required or expected to justify actions or decisions
            </p>
            <p>
              <span>Responsive:</span> reacting quickly and positively.
            </p>
          </Bullets>
        </SubContainer1>
        <SubContainer2>
          <Blurb />
        </SubContainer2>
      </Container>
    </Section>
  );
};
