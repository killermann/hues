require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: "hues",
    titleTemplate: "%s ✗ hues",
    description:
      "Art, Tools, & Resources for Global Justice created by Sam Killermann + Friends",
    siteUrl: "https://hues.xyz", // No trailing slash allowed!
    image: "/images/hues-social-share-card.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@huesorg",
    author: "Sam Killermann",
    lang: "en-us",
    menuLinks: [
      {
        name: "Art",
        link: "/art/"
      },
      {
        name: "Tools",
        link: "/tools/"
      },
      {
        name: "Resources",
        link: "/resources/"
      },
    ],
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        apiUrl: "https://site-api.datocms.com"
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `barlow condensed\:700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/admin`, `/tags/links`]
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
  ]
};
