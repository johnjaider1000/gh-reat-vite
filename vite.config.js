import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://johnjaider1000.github.io/gh-reat-vite-test/",
  plugins: [react()],
});
