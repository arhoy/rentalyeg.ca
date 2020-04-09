import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div``;

const Content = styled.div`
  margin: 2rem 0;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 27px;

  color: #333333;
  & .bold {
    font-weight: bold;
  }
  & .regular {
    margin-bottom: 1rem;
  }

  & .italic {
    font-style: italic;
  }
`;

export const Blurb = () => {
  return (
    <Container>
      <Content>
        <div className="bold">What does Kindness mean to Live Treo?</div>
        <div className="regular">
          It starts with us. It means we promise that our team will treat and
          hold interactions that start with the action of kindness. Why? it’s
          simple, we believe people deserve to be treated with kindness.
        </div>
        <div className="italic">
          Here’s what kindness doesn’t look like:Being disrespected. Being
          mistreated over the phone. Not getting your issues rectified.
        </div>
      </Content>
      <Content>
        <div className="bold">How can we be Attentive?</div>
        <div className="regular">
          Customers expect companies to treat them with full attention, not all
          do. This core principal is implemented daily at Live Treo on all
          levels of the organization. When we interact with you, you can be
          assured we will be hold our promise to listen, focus, an respect your
          wants and needs.
        </div>
        <div className="italic">
          There’s nothing more frustrating than dealing with people who don’t
          pay attention to what your concerns are.
        </div>
      </Content>
      <Content>
        <div className="bold">
          When you interact with us, you can be assured you have Experts on your
          team. How?
        </div>
        <div className="regular">
          Our residents want to trust us, they want to know the company they are
          dealing with are competent and understand their wants and needs. With
          having expert knowledge and the drive to learn more, we can be
          confident that our residents are left with the solutions they came
          for. We promise to deliver professional knowledge at all times.
        </div>
        <div className="italic">
          When you call a company for an answer but the person you are dealing
          with cannot help yo,u it leaves you with a feeling of frustration. We
          know how important dealing with experts are. In our communities you
          need experts, you need professionals who can help.
        </div>
      </Content>
      <Content>
        <div className="bold">Accountability.</div>
        <div className="regular">
          We hold ourselves accountable at ALL times.
        </div>
        <div className="italic">
          What does this mean? It means when we say we will do something, we
          will do it. When we make a promise, we will hold it. We believe in the
          value humans hold and we understand fully that accountability
          strengthens our foundation of Live Treo. This helps us at Live Treo
          provide the best customer experience possible. This two way street
          ensures we know what the customer expects of us and that we are able
          to deliver for them. What does this NOT mean? It does not mean you
          will deal with a team that doesn’t hold up to their promises.
        </div>
      </Content>
      <Content>
        <div className="bold">
          Responsive. How can our customers be assured they will be communicated
          with in a responsive manner?
        </div>
        <div className="regular">
          In 2020 customers expect speed. If something needs to be fixed, if a
          customer calls and leaves a message, or has a concern our promise at
          Live Treo is that we will be accountable to being Responsive.
        </div>
        <div className="italic">
          Here’s what responsiveness doesn’t look like. Getting the answering
          machine every time you call for help. You want to deal with humans, we
          know that which is why we aim to providing customer experiences with
          people and communicating in a timely manner.
        </div>
      </Content>
    </Container>
  );
};
