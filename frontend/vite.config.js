import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  svgr()],
  base:"/",
  server: {
    proxy: {
      "/api": "http://localhost:4000",
    },
  },
})
