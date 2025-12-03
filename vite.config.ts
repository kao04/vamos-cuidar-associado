// kao04/vamos-cuidar-associado/vamos-cuidar-associado-f5ac4692a08159cb1d4cc0693156b7c7bd9e0778/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // O caminho base está definido para o caminho absoluto da subpasta.
  base: mode === "production" ? "/vamoscuidarassociado/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));