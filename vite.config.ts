import { resolve }  from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/radioport/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        audio: resolve(__dirname, 'audiobook.html'),
        listen: resolve(__dirname, 'listenpage.html'),
        search: resolve(__dirname, 'searchpage.html'),
        music: resolve(__dirname, 'musicpage.html'),
      },
    },
  },
})
