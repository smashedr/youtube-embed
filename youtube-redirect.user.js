// ==UserScript==
// @name        YouTube Embed Redirector
// @namespace   https://github.com/smashedr
// @description Redirects YouTube Videos to an Embed
// @author      Shane
// @version     1.0
// @grant       none
// @run-at      document-start
// @match       https://www.youtube.com/watch?v=*
// ==/UserScript==

const url = `https://smashedr.github.io/youtube-embed?source=${window.location.href}`
window.location.replace(url)
