import React from 'react';

import Layout from '../components/layouts/Layout';

import { Section0 } from '../components/_about/Section0/_Section0';
import { graphql, useStaticQuery } from 'gatsby';
import { Section1 } from '../components/_about/Section1/Section1';
const AboutPage = () => {
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
      <Section1 />
    </Layout>
  );
};

export default AboutPage;
