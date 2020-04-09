import React from 'react';

import Layout from '../components/layouts/Layout';

import { Section0 } from '../components/_indexPage/Section0/_Section0';
import { graphql, useStaticQuery } from 'gatsby';
const Home = () => {
  const contentfulData = useStaticQuery(graphql`
    {
      allContentfulCommunity(sort: { order: ASC, fields: slug }) {
        nodes {
          slug
          title
          section0heroImage {
            fluid {
              src
            }
          }
        }
      }
    }
  `);
  return (
    <Layout full={true}>
      <Section0 data={contentfulData} />
    </Layout>
  );
};

export default Home;
