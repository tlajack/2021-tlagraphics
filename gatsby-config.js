module.exports = {
  siteMetadata: {
    title: `TLA Graphics`,
    description: `Transforming Ideas into Stunning Visuals`,
    url: `https://tlagraphics.ca`,
    siteUrl: `https://tlagraphics.com`,
    twitterUsername: `@tlagraphics`,
    author: `@tlagraphics`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
