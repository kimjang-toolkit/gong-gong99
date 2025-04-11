import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "url";
import svgr from "vite-plugin-svgr";
import { VitePluginRadar } from "vite-plugin-radar";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    VitePluginRadar({
      // Google Analytics tag injection
      analytics: {
        id: process.env.VITE_GOOGLE_ANALYTICS_ID ?? "",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@domain": fileURLToPath(
        new URL("./common-type/src/domain", import.meta.url)
      ),
      "@interface": fileURLToPath(
        new URL("./common-type/src/interface", import.meta.url)
      ),
    },
  },
});
