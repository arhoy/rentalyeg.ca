import React from 'react';

import Layout from '../components/layouts/Layout';

import { Section0 } from '../components/_indexPage/Section0/_Section0';

const Home = ({ data }) => {
  return (
    <Layout full={true}>
      <Section0 />
    </Layout>
  );
};

export default Home;
