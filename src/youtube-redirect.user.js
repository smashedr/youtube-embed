// ==UserScript==
// @name        YouTube Embed Redirector
// @description Redirects YouTube Videos to an Embed
// @author      Shane
// @version     1.2
// @namespace   https://github.com/smashedr/youtube-embed
// @icon        https://smashedr.github.io/youtube-embed/favicon.ico
// @updateURL   https://smashedr.github.io/youtube-embed/youtube-redirect.user.js
// @downloadURL https://smashedr.github.io/youtube-embed/youtube-redirect.user.js
// @run-at      document-start
// @match       https://www.youtube.com/watch?v=*
// @match       https://www.youtube.com/v/*
// @match       https://www.youtube.com/watch/*
// @match       https://www.youtube.com/live/*
// ==/UserScript==

;(function () {
    const url = new URL(window.location)
    if (
        url.searchParams.get('embeds_referring_euri') ===
        'https://smashedr.github.io/'
    ) {
        return console.debug('not redirection due to referrer')
    }
    const target = `https://smashedr.github.io/youtube-embed?source=${window.location.href}`
    window.location.replace(target)
})()
