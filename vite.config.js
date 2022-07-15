import path from "path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
    }),
  ],
  resolve: {
    alias: {
      "@/views": path.resolve(__dirname, "src/views"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/assets": path.resolve(__dirname, "src/assets"),
      "@/utils": path.resolve(__dirname, "src/utils"),
      "@/hooks": path.resolve(__dirname, "src/hooks"),
      "@/context": path.resolve(__dirname, "src/context"),
    },
  },
});
