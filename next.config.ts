import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Agrega el nombre exacto de tu repositorio en GitHub
  images: {
    unoptimized: true,
  },
};

export default nextConfig;