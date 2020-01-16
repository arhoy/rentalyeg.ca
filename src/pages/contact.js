import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layouts/Layout';

import { H1, P } from '../components/reusableStyles/typography/Typography.js';

import {
  Section,
  Container800,
} from '../components/reusableStyles/sections/Sections.js';
import { NetlifyFormV2 } from '../components/forms/NetlifyFormV2';

const CustomContainer800 = styled(Container800)``;

const contact = () => {
  return (
    <Layout>
      <Section>
        <CustomContainer800>
          <H1>Contact Page</H1>
          <P> You can reach me at (587) 772 5536 or fill out the form below</P>

          <NetlifyFormV2 background="#EAEDED" color="black" />
        </CustomContainer800>
      </Section>
    </Layout>
  );
};

export default contact;
