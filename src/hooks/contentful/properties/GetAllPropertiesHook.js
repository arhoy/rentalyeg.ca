import { graphql, useStaticQuery } from 'gatsby';

const GetAllPropertiesHook = () => {
  const data = useStaticQuery(graphql`
    {
      allItems: allContentfulProperties {
        nodes {
          id
          title
          slug
          subtitle
          pictures {
            fluid(quality: 90, maxWidth: 1000) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  `);

  const items = data.allItems.nodes;

  return items;
};

export default GetAllPropertiesHook;
