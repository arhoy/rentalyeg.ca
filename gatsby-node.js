// const path = require('path');

// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions;

//   const { data } = await graphql(`
//     {
//       properties: allContentfulProperties {
//         nodes {
//           slug
//         }
//       }
//     }
//   `);

//   // creates pages Menu
//   data.menuItems.nodes.forEach(item => {
//     createPage({
//       path: `/${item.slug}`,
//       component: path.resolve('./src/templates/MenuItemTemplate.js'),
//       context: {
//         slug: item.slug,
//       },
//     });
//   });

// };
