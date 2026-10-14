import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [react(), federation({
    name: "workspace",
    filename: "remoteEntry.js",
    exposes: { "./Workspace": "./src/Workspace.jsx" },
    shared: ["react", "react-dom"]
  })],
  server: { port: 5175, strictPort: true },
  build: { target: "esnext", cssCodeSplit: false }
});
