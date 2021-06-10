module.exports = {
  siteMetadata: {
    title: `Icon Gallery`,
    description: `Icon Gallery Proof of Concept`,
    author: `Marcy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Merriweather\:700`, `Lato\:400,700`, `Literata\:900`],
        display: 'swap',
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
