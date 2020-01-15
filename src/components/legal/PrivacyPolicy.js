import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { HomeSection } from '../home/Section/ContentfulSection';

const PrivacyPolicy = () => {
  const contentfulData = useStaticQuery(graphql`
    {
      contentfulSection(id: { eq: "385663ff-1ff3-554c-a03e-b31ee3dc6581" }) {
        id
        title
        subtitle
        description {
          json
        }
      }
    }
  `);

  return <HomeSection data={contentfulData.contentfulSection} />;
};

export default PrivacyPolicy;
