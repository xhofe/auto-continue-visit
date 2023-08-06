import { ClickElement, ContinueConfig, TakeFromQuery } from './types'
import { sleep } from './utils'

export function takeFromQuery(cfg: TakeFromQuery) {
  const { key, handler } = cfg
  const url = new URL(location.href)
  let target = url.searchParams.get(key)
  if (!target) {
    return
  }
  if (handler) {
    target = handler(target)
  }
  console.log(`[auto-continue-visit] ${target}`)
  window.open(target, '_self')
}

export async function clickElement(cfg: ClickElement) {
  const { selector, delay = 0, times = 1, interval = 0 } = cfg
  if (delay) {
    await sleep(delay)
  }
  for (let i = 0; i < times; i++) {
    const element = document.querySelector(selector) as HTMLElement | null
    if (element) {
      element.click()
      break
    }
    await sleep(interval)
  }
}

export async function continueVisit(cfg: ContinueConfig) {
  if ('key' in cfg) {
    takeFromQuery(cfg)
  } else {
    clickElement(cfg)
  }
}
