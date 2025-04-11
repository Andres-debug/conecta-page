import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // No necesitas basePath para repositorios username.github.io o organization.github.io
  trailingSlash: true, // Ayuda con rutas en GitHub Pages
};

export default nextConfig;