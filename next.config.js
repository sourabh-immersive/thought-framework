const path = require('path');

module.exports = {
    // output: 'export',
    reactStrictMode: true,
    sassOptions: {
      includePaths: [path.join(__dirname, '/styles')],
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.thoughtframeworks.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
    // compiler: {
    //   styledComponents: {
    //     ssr: true,
    //   },
    // },
    // images: { 
    //   unoptimized: true,
    //   formats: ['image/webp'],
    // },
    
    // async redirects() {
    //   return [
    //     {
    //       source: '/fromto',
    //       destination: '/',
    //       permanent: true,
    //     },
    //     {
    //         source: '/fromto',
    //         destination: '/todestination',
    //         permanent: true,
    //     }
    //   ]
    // },
  };