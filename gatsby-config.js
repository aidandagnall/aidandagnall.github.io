require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "Aidan Dagnall",
    description: "Starter for Reflex.",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    "@reflexjs/gatsby-theme-base",
    "@reflexjs/gatsby-theme-post",
    {
      resolve: "@reflexjs/gatsby-plugin-metatags",
      options: {
        types: [`Page`, `Post`],
      },
    },
  ],
}
