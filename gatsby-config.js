const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        "components": path.join(__dirname, "src/components"),
        "styles": path.join(__dirname, "src/assets/styles"),
        "interfaces": path.join(__dirname, "src/interfaces"),
        "data": path.join(__dirname, 'src/data'),
        "pages": path.join(__dirname, 'src/pages')
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-preact`,
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        // printRejected: true, // Print removed selectors and processed file names
        purgeOnly: ['src/assets/styles', 'src/components','node_modules/'],
        ignore: ['node_modules/'],
        whitelist: [],
        whitelistPatterns: []
      }
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       'gatsby-remark-relative-images',
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           backgroundColor: "transparent",
    //           maxWidth: "800",
    //           disableBgImageOnAlpha: true,
    //           linkImagesToOriginal: false,
    //           withWebp: true,
    //           loading: "eager"
              
    //         },
    //       },
    //     ],
    //   },
    // },
  ],
}
