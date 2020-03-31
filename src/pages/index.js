import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div`
  padding: 2rem;

  & h2 {
  }

  & p {
    margin: 2rem 0;
  }

  & ul {
    margin: 2rem 4rem;
  }
`;

const IndexPage = () => {
  return (
    <Container>
      <h2>Our Response to COVID-19</h2>
      <p>
        The emergence of the COVID-19 epidemic has complicated life for
        everyone, but it has also impacted those looking for a home in unique
        ways. If you need to look for a home right now, and are concerned (like
        we all are) about not exposing yourself to infection, maybe you are
        wondering:
      </p>

      <ul>
        <li>How can I view my new home?</li>
        <li>
          How can I meet the team who will be providing me with customer service
          and get a feel for what kind of people they are?
        </li>
        <li>
          How can I learn about variables such as pricing, incentives, and lease
          term?
        </li>
        <li>How can I pay a security deposit?</li>
        <li>
          How do I sign a lease and move-in inspection, and get the keys for my
          new home?
        </li>

        <li>
          Complete your move-in inspection in advance and leave it on the
          kitchen counter in your new home. You can then sign it and drop it off
          at our office mailbox.
        </li>
      </ul>

      <p>
        Here are the things we are working on to improve what we are already
        doing:
      </p>

      <ul>
        <li>
          Preparing 360 degree virtual tours of available suites for publishing
          on our website and in our ads.
        </li>
        <li>
          Preparing video interviews with our key staff so that you can get to
          know them virtually, and get a feel for how much they care about you
          and your family.
        </li>
      </ul>
      <p>
        Here is what we are doing to protect our residents from community
        transmission of COVID-19:
      </p>

      <ul>
        <li>
          We are disinfecting all high touch common area surfaces twice per day
          (e.g. door handles, stair railings, laundry machines, mailboxes,
          etc.).
        </li>
        <li>
          We are providing customer service virtually (e.g. by email, phone
          call, and text).
        </li>
        <li>
          If maintenance technicians are required to enter your suite to perform
          critical maintenance, they wear face masks and gloves while in your
          suite
        </li>
        <li>
          Each of our staff members is committed to maintaining a minimum of six
          feet separation from all other humans, no exceptions.
        </li>
      </ul>

      <p>
        We know that just because everyone needs to isolate right now doesn't
        mean that people like you still don't need to find a new home. We are
        here to help make things easier for you. Please email, call, or text us.
        We will get back to you right away and give you access to the virtual
        resources that will help decide if "Property Name" is the right fit for
        you and your family to call home.
      </p>
    </Container>
  );
};

export default IndexPage;
