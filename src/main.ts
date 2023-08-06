import { config } from './config'
import { continueVisit } from './continue'

function main() {
  const origin = window.location.origin
  const cfg = config.find(cfg => cfg.link.startsWith(origin))
  console.log(`[auto-continue-visit] ${origin} ${cfg}`)
  if (!cfg) {
    return
  }
  continueVisit(cfg)
}

main()
