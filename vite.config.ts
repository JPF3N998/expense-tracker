import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


const getResolved = (path: string) => {
  return resolve(__dirname, path)
}

const alias = {
  '@': getResolved('src'),
  '@components': getResolved('src/components'),
  '@config': getResolved('src/config'),
  '@constants': getResolved('src/constants'),
  '@models': getResolved('src/models'),
  '@views': getResolved('src/views'),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('fluent-')
      }
    }
  })],
  resolve: { alias }
})
