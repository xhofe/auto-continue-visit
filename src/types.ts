export type BasicInfo = {
  // the link of the site
  link: string
}

export type TakeFromQuery = {
  // the key of query
  key: string
  // the handler of query value
  handler?: (value: string) => string
}

export type ClickElement = {
  // the selector of element
  selector: string
  // the delay time before click
  delay?: number
  // the times of retry click
  times?: number
  // the interval time between retry
  interval?: number
}

export type ContinueConfig = BasicInfo & (TakeFromQuery | ClickElement)

export type Config = Array<ContinueConfig>
