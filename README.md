# auto-continue-visit

![](./assets/logo.svg)

A Tampermonkey script that help you to automatically continue to visit.

一个帮助自动继续访问目标链接的油猴脚本。

Click [here](https://greasyfork.org/zh-CN/scripts/472496) to install.

## Contribute

### Add a new site

Edit `src/config.ts` to add a new site.
The key of the record is the link of the site, and the value is continue method.

There are two continue methods now:

- take target link from query string, just fill in the key of query string.
- click the specified element, just fill in the selector of the element.

The other attributes are optional and you can read the `src/types.ts` to learn more.

### Add a new continue visit method

TODO