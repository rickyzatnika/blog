/** @type {import('next').NextConfig} */




module.exports =  {


  reactStrictMode: true,
  images: {
    host: 'media.graphassets.com',
    domains: ['img.icons8.com','media.graphassets.com','https://media.graphcms.com/UE99Aje8S3K4W7P2GIdK','https://img.icons8.com/color/48/000000/calendar-16.png',
    'media.graphcms.com'
   ]
  },
  
  poweredByHeader: false,

  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },

    async headers() {
      return [
            {
              source: '/:path*',
              headers: [
                {
                  key:'X-DNS-Prefetch-Control',
                  value: 'on',
                },
              ],
            },
          ]
      },
}

