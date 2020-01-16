import { graphql, useStaticQuery } from 'gatsby';

const WestparkridgeHook = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulProperties(id: { eq: "b93be116-4119-5b37-8e2a-61898519e58a" }) {
        id
        title
        subtitle
        subtitle
        pictures {
          fluid(maxWidth: 500) {
            src
          }
        }
        description {
          json
        }
      }
    }
  `);

  const item = data.contentfulProperties;

  return item;
};

export default WestparkridgeHook;
