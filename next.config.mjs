/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'media.a24.com',
              port: '',
              //pathname: '/p/**',
            },
          ],
    },
    eslint: { ignoreDuringBuilds: true },
    /* devServer: {
        proxy: {
            '/api': {
                target: 'https://api.diariouno.com.ar',
                changeOrigin: true,
                pathRewrite: { '^/api': '' },
            },
        },
    },  */
};

export default nextConfig;
