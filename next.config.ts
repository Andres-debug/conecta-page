import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Agrega el nombre exacto de tu repositorio en GitHub
  basePath: process.env.NODE_ENV === 'production' ? "/shroudsoft.github.io" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;