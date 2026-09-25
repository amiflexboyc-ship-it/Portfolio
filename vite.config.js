import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Listen on all local IPs (0.0.0.0, 127.0.0.1, and localhost)
    port: 5173,
    strictPort: false,
  },
});