import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://ai-enable-expense-tracker.netlify.app/dashboard', // Or your desired sub-path
        permanent: true, // Use false if you might change this later (307 vs 301)
      },
    ];
  },
	
};

export default nextConfig;
