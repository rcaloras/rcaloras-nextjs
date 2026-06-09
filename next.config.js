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
  async redirects() {
    return [
      {
        source: "/resume",
        destination:
          "https://www.dropbox.com/scl/fi/9gwi7aklubp41l8g28n4f/rcalorasS26.pdf?rlkey=jeiu9ou7p3tbq0w41vzgv8wxz&e=1&raw=1",
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
