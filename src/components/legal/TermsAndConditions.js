import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { HomeSection } from '../home/Section/ContentfulSection';

const TermsAndConditions = () => {
  const contentfulData = useStaticQuery(graphql`
    {
      contentfulSection(id: { eq: "83cb8381-dbf1-5945-b661-7efe00d88212" }) {
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

export default TermsAndConditions;
