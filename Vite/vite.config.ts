import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'MyComponentsLibrary',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    outDir: 'dist',
  },
})
