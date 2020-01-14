import React from 'react';

import Layout from '../components/layouts/Layout';

import {
  Section,
  Container800,
} from '../components/reusableStyles/sections/Sections.js';

import { ButtonStyle2 } from '../components/reusableStyles/buttons/Button';
import NoStyleLink from '../components/Links/NoStyleLink';
import TermsAndConditions from '../components/legal/TermsAndConditions';

const DeliveryPage = () => {
  return (
    <Layout>
      <Section>
        <Container800>
          <TermsAndConditions />

          <ButtonStyle2>
            <NoStyleLink to="/">Back to Home Page</NoStyleLink>
          </ButtonStyle2>
        </Container800>
      </Section>
    </Layout>
  );
};

export default DeliveryPage;
