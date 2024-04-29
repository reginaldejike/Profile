import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    server: {
      hmr: {
        overlay: false,
      },
      port: 3005,
    },
    plugins: [react()],
  };
});
