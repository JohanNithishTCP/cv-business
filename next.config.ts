import os from "os";
import type { NextConfig } from "next";

const localIps = Object.values(os.networkInterfaces())
  .flat()
  .filter((details) => details?.family === "IPv4")
  .map((details) => details?.address)
  .filter((address): address is string => !!address);

const nextConfig: NextConfig = {
  /* config options here */
  // @ts-ignore - explicitly allowed by Next.js 16 version message
  // output: "standalone",
  allowedDevOrigins: [...localIps, "localhost", "127.0.0.1"],
};

export default nextConfig;
