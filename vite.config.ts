import { defineConfig } from 'vite'
import monkey from 'vite-plugin-monkey'
import { config } from './src/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        author: 'Andy Hsu',
        description: 'Skip the middle page to visit the link directly.',
        icon: 'https://cdn.jsdelivr.net/gh/Xhofe/skip-middle-pages/assets/logo.svg',
        namespace: 'https://github.com/Xhofe/skip-middle-pages',
        license: "MIT",
        match: Object.keys(config).map(url => `${url}*`),
      },
    }),
  ],
})
