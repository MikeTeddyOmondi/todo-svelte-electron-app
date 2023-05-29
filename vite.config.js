import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  // base: process.env.IS_DEV !== "true" ? "./" : "/",
  plugins: [svelte()],
  build: {
    outDir: "build",
  },
  server: {
    port: 5657,
  },
});
