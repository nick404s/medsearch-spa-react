import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// "homepage": "https://nick404s.github.io/medsearch-spa-react/",
export default defineConfig({
  base: "/medsearch-spa-react/",
  plugins: [react()],
});
