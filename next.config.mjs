/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/react-app/:path*',
                destination: '/react-app/:path*',
            },
        ];
    },
};

export default nextConfig;