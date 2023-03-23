/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  // 새로고침 시  css 날라감 방지
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/join',
        destination: `https://bodylog1.duckdns.org/join`,
      },
      {
        source: '/api/login',
        destination: `https://bodylog1.duckdns.org/login`,
      },
      {
        source: `/api/:path*`,
        destination: `https://bodylog1.duckdns.org/:path*`, // 도대체 :path*는 어떤 역할인가...?
      },
      {
        source: `/api/:path*/update`,
        destination: `https://bodylog1.duckdns.org/:path*/update`, // 도대체 :path*는 어떤 역할인가...?
      },
    ];
  },
};

module.exports = nextConfig;
