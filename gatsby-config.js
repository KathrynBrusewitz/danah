module.exports = {
  siteMetadata: {
    title: `Danah Kowdan`,
    description: `Personal website of Danah Kowdan`,
    author: `@kathrynbrusewitz`,
    siteUrl: `https://dmohamed.com`,
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/borderless-dolphin.svg",
      },
    },
  ],
};
