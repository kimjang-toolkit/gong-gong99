import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'url';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@domain': fileURLToPath(
        new URL('./common-type/src/domain', import.meta.url)
      ),
      '@interface': fileURLToPath(
        new URL('./common-type/src/interface', import.meta.url)
      ),
    },
  },
});
