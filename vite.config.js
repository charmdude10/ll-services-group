import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const certPath = path.resolve(process.cwd(), "certs", "localhost.crt");
const keyPath = path.resolve(process.cwd(), "certs", "localhost.key");

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 8080,
    https: {
      cert: fs.readFileSync(certPath),
      key: fs.readFileSync(keyPath),
    },
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
    https: {
      cert: fs.readFileSync(certPath),
      key: fs.readFileSync(keyPath),
    },
  },
  resolve: {
    alias: { "@": path.resolve(process.cwd(), "src") },
  },
  tanstackStart: {
    // SSR entry lives in src/server.js
    server: { entry: "server" },
  },
});
