// ==UserScript==
// @name        YouTube Embed Redirector
// @description Redirects YouTube Videos to an Embed
// @author      Shane
// @version     1.0
// @namespace   https://github.com/smashedr
// @updateURL   https://github.com/smashedr/youtube-embed/raw/master/youtube-redirect.user.js
// @icon        https://github.com/smashedr/youtube-embed/raw/master/favicon.ico
// @grant       none
// @run-at      document-start
// @match       https://www.youtube.com/watch?v=*
// ==/UserScript==

;(function () {
    const url = `https://smashedr.github.io/youtube-embed?source=${window.location.href}`
    window.location.replace(url)
})()
