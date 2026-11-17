import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  // lets "@/App" and "@/App.css" imports work exactly as in the original
  resolve: { alias: { "@": path.resolve(__dirname, "src") } },
  // App.jsx reads process.env.REACT_APP_BACKEND_URL, so we provide it here
  define: {
    "process.env.REACT_APP_BACKEND_URL": JSON.stringify(process.env.BACKEND_URL || "http://localhost:8001"),
  },
});
