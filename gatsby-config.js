module.exports = {
  siteMetadata: {
    title: 'Gatsby + Contentstack',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentstack',
      // options:{
      //   'api_key':'blt86c23e6cfeaf08a6',
      //   'access_token':'blt6fde68c921388bcb511907b0',
      //   'environment':'development'
      // },
      // options:{
      //   'api_key':'blt7c7325b397ad0db5',
      //   'access_token':'blt9284b5f82fd87cf1',
      //   'environment':'development'
      // },
      options:{
        'api_key':'blt30db331020ed8a66',
        'access_token':'blt74d900c4d54132ca',
        'environment':'development'
      },
    },
    'gatsby-plugin-react-helmet'
  ],
}
