const repo = 'NautilusSolutions'
const isGithubPages = process.env.GITHUB_ACTIONS === 'true'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...(isGithubPages
    ? { basePath: `/${repo}`, assetPrefix: `/${repo}/` }
    : {}),
}

export default nextConfig
