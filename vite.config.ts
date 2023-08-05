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
        description: 'Skip middle page to visit link directly.',
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'npm/skip-middle-page',
        match: Object.keys(config).map(url => `${url}*`),
      },
    }),
  ],
})
