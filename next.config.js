// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   terser: true,
// }

// module.exports = nextConfig

// module.exports = {
//   serverRuntimeConfig: {
//     // Will only be available on the server side
//     mySecret: 'secret',
//     // secondSecret: process.env.SECOND_SECRET, // Pass through env variables
//   },
//   publicRuntimeConfig: {
//     // Will be available on both server and client
//     staticFolder: '/static',
//   },
// };

module.exports = {
  env: {
    slug_Api:
      // "http://codespick.herokuapp.com/api/get-all-language-page" ||
      "https://codespick.herokuapp.com/api/get-all-language-page",
    // "http://localhost:3000/api/get-all-language-page",
    search_Api:
      // "http://codespick.herokuapp.com/api/get-website" ||
      "https://codespick.herokuapp.com/api/get-website",
    // "http://localhost:3000/api/get-website",
  },
};
