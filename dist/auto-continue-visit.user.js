// ==UserScript==
// @name         auto-continue-visit
// @namespace    https://github.com/Xhofe/auto-continue-visit
// @version      0.0.1
// @author       Andy Hsu
// @description  A Tampermonkey script that help you to automatically continue to visit.
// @license      MIT
// @icon         https://cdn.jsdelivr.net/gh/Xhofe/auto-continue-visit/assets/logo.svg
// @match        https://link.zhihu.com*
// @match        https://leetcode.cn/link*
// @match        https://link.csdn.net*
// @match        https://link.juejin.cn*
// @match        https://gitee.com/link*
// @match        https://docs.qq.com/scenario/link.html*
// @match        https://hd.nowcoder.com/link.html*
// @match        https://www.oschina.net/action/GoToLink*
// @match        https://link.zhihu.com/*
// @match        https://leetcode.cn/link/*
// @match        https://link.csdn.net/*
// @match        https://link.juejin.cn/*
// @match        https://gitee.com/link/*
// @match        https://docs.qq.com/scenario/link.html/*
// @match        https://hd.nowcoder.com/link.html/*
// @match        https://www.oschina.net/action/GoToLink/*
// ==/UserScript==

(function () {
  'use strict';

  const config = [
    {
      link: "https://link.zhihu.com",
      key: "target"
    },
    {
      link: "https://leetcode.cn/link",
      key: "target"
    },
    {
      link: "https://link.csdn.net",
      key: "target"
    },
    {
      link: "https://link.juejin.cn",
      key: "target"
    },
    {
      link: "https://gitee.com/link",
      key: "target"
    },
    {
      link: "https://docs.qq.com/scenario/link.html",
      key: "url"
    },
    {
      link: "https://hd.nowcoder.com/link.html",
      key: "target"
    },
    {
      link: "https://www.oschina.net/action/GoToLink",
      key: "url"
    }
  ];
  async function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  function takeFromQuery(cfg) {
    const { key, handler } = cfg;
    const url = new URL(location.href);
    let target = url.searchParams.get(key);
    if (!target) {
      return;
    }
    if (handler) {
      target = handler(target);
    }
    console.log(`[auto-continue-visit] ${target}`);
    window.open(target, "_self");
  }
  async function clickElement(cfg) {
    const { selector, delay = 0, times = 1, interval = 0 } = cfg;
    if (delay) {
      await sleep(delay);
    }
    for (let i = 0; i < times; i++) {
      const element = document.querySelector(selector);
      if (element) {
        element.click();
        break;
      }
      await sleep(interval);
    }
  }
  async function continueVisit(cfg) {
    if ("key" in cfg) {
      takeFromQuery(cfg);
    } else {
      clickElement(cfg);
    }
  }
  function main() {
    const origin = window.location.origin;
    const cfg = config.find((cfg2) => cfg2.link.startsWith(origin));
    console.log(`[auto-continue-visit] ${origin} ${cfg}`);
    if (!cfg) {
      return;
    }
    continueVisit(cfg);
  }
  main();

})();
