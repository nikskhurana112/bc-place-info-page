import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // allow external access (LAN + ngrok)
    port: 5173,
    allowedHosts: [
      ".ngrok-free.app", // allow any ngrok subdomain
      "localhost", // keep localhost working
    ],
  },
});
