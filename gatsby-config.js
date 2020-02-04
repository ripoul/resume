const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: 'https://ripoul.fr'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-cname',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-page-progress',
      options: {
        includePaths: ['/',],
        excludePaths: [],
        height: 3,
        prependToBody: false,
        color: `#663399`,
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
