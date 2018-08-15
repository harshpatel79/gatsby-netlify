module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentstack',
      options:{
        'api_key':'blt86c23e6cfeaf08a6',
        'access_token':'blt6fde68c921388bcb511907b0',
        'environment':'development'
      },
    },
    'gatsby-plugin-react-helmet'
  ],
}
