import { graphql, useStaticQuery } from 'gatsby';

const WestparkridgeHook = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulProperties(id: { eq: "b93be116-4119-5b37-8e2a-61898519e58a" }) {
        reviews {
          id
          title
          customerName
          rating
          description {
            description
          }
        }
        id
        title
        subtitle
        addressName
        address {
          lat
          lon
        }
        propertyFeatures
        communityFeatures
        community
        city
        smoking
        tenantParking
        pets
        startingAt
        pictures {
          description
          title
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyContentfulFluid_withWebp
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
