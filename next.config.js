/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    FACEBOOK_APP_ID: '186321640867744',
    FACEBOOK_APP_SECRET: '04e8c597920272b28f1ce9abeed3034b',
    GOOGLE_CLIENT_ID:
      '538961477268-s9af9d8babcashoobvve99cbf3n738u7.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: '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',
    NEXTAUTH_BASE_URI: 'https://api.la-tech-factory.com/api/',
    NEXTAUTH_URL: 'http://localhost:3000',
    NEXTAUTH_SECRET: '03672033b565b91dc2a337b9703e3938',
  },
};

module.exports = nextConfig;
