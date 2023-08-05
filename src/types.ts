export type TakeFromQuery = {
  key: string
  handler?: (value: string) => string
}

export type ClickElement = {
  selector: string
  delay?: number
  times?: number
  interval?: number
}

export type SkipMethod = TakeFromQuery | ClickElement

export type Config = Record<string, SkipMethod>
