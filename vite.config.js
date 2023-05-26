import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  root: "src",
  rollupOptions: {
    input: [resolve(__dirname, "src/App.jsx")],
  },
});
