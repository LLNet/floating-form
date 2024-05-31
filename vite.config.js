import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    copyPublicDir: false,
    lib:{
      entry: resolve(__dirname, 'lib/main.js'),
      formats: ['es', 'cjs'],
      name: 'FloatingForm'
    },
    rollupOptions:{
        external: ['vue'],
        output: {
            globals: {
            vue: 'Vue'
            }
        }
    }
  }
})