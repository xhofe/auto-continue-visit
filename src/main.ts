import { config } from './config'
import { skip } from './skip'
import { Config } from './types'

function main() {
  const origin = window.location.origin
  const _config: Config = {}
  Object.keys(config).forEach(url => {
    const origin = new URL(url).origin
    _config[origin] = config[url]
  })
  const cfg = _config[origin]
  console.log(`[skip-middle-page] ${origin} ${cfg}`)
  if (!cfg) {
    return
  }
  skip(cfg)
}

main()
