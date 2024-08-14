/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'heritage-backend.onrender.com',
            port: '5000',
            
          },
        ],
        domains: ['heritage-backend.onrender.com'],
      },
};

export default nextConfig;
