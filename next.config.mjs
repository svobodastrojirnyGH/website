/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                pathname: '/**'
                // pathname: '/images/**, 
            }
        ]
    }

};

export default nextConfig;
