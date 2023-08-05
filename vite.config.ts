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
        description: 'A Tampermonkey script that help you to automatically continue to visit.',
        icon: 'https://cdn.jsdelivr.net/gh/Xhofe/auto-continue-visit/assets/logo.svg',
        namespace: 'https://github.com/Xhofe/auto-continue-visit',
        license: 'MIT',
        match: Object.keys(config)
          .map(url => `${url}*`)
          .concat(Object.keys(config).map(url => `${url}/*`)),
      },
    }),
  ],
})
