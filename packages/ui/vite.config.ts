import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import tsdownConfig from "./tsdown.config.js";

import { defineConfig } from "vite-plus";

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  pack: tsdownConfig,
});
