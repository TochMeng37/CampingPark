/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'img.freepik.com',                // For images from Freepik
      'z-p3-scontent.fpnh5-5.fna.fbcdn.net', // Existing Facebook domains
      'z-p3-scontent.fpnh5-3.fna',
      'z-p3-scontent.fpnh5-3.fna.fbcdn.net',
      'z-p3-scontent.fpnh5-2.fna.fbcdn.net',
      'z-p3-scontent.fpnh5-1.fna.fbcdn.net',
      'z-p3-scontent.fpnh5-4.fna.fbcdn.net',
      'z-p3-scontent.fpnh5-6.fna.fbcdn.net',
      'assets.aceternity.com',
      'images.unsplash.com'
    ],
  },
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'z-p3-scontent.fpnh5-3.fna',
      port: '',
      pathname: '/v/t39.30808-6/435894982_404676722511120_3052426577055779182_n.jpg',
    },
  ],
  
};

export default nextConfig;
