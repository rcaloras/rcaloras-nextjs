/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    quietDeps: true,
    silenceDeprecations: [
      "import",
      "global-builtin",
      "if-function",
      "color-functions",
    ],
  },
}

module.exports = nextConfig
