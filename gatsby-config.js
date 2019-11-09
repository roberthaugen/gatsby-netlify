/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby Boostrap & WP",
    description: "This is a gatsby website for the web",
    keywords: "gatsby, gatsbyjs, wordpress gatsby",
    image: '/static/gatsby.jpg',
    url: "https://udemy-gatsby-course.netlify.com"
  },
  
  plugins: [
    // You can have multiple instances of this plugin
    // to read source nodes from different locations on your
    // filesystem.
    //
    // The following sets up the Jekyll pattern of having a
    // "pages" directory for Markdown files and a "data" directory
    // for `.json`, `.yaml`, `.csv`.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {resolve: `gatsby-transformer-remark`},
    {resolve: `gatsby-source-wordpress` ,options: {
      baseUrl: 'codingsrc.com',
      protocol: 'https',
      hostingWPCOM: false,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `GatsbyJS Bootstrap`,
      short_name: `GatsbyJS Bootstrap`,
      start_url: `/`,
      background_color: `#F8F9FA`,
      theme_color: `#FFFFFF`,
      display: `standalone`,
    },
  },
  ]
}

/*
<Helmet>
                <title>
                  gatsby bootstrap and WP
                </title>
                <meta name="description" content="This is our description" />
                <meta name="keywords" content="gatsby, gatsbyjs project, wordpress and the gatsby" />
                <meta name="robots" content="no-index, no-follow" />
              </Helmet>
              */