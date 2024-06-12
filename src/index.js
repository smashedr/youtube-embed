const error = document.getElementById('error')
const message = document.getElementById('message')
const issues = document.getElementById('issues')
const iframe = document.querySelector('iframe')

;(function () {
    console.log('window.location.href:', window.location.href)
    const searchParams = new URLSearchParams(window.location.search)
    const source = searchParams.get('source')
    console.log('source:', source)
    if (!source) {
        displayError('No source in the query string.')
        return console.warn('No source in query string:', searchParams)
    }

    const url = new URL(source)
    let id = getYtId(url)
    console.log('id:', id)
    if (!id) {
        displayError('Unable to parse ID from query string.')
        return console.warn('Unable to parse ID from query string:', url)
    }

    const src = `https://www.youtube.com/embed/${id}`
    iframe.src = src
    console.log(`Embed URL: ${src}`)
    document.title = `${document.title}: ${id}`
})()

function getYtId(url) {
    console.log('getYtId:', url)
    if (url.searchParams.has('v')) {
        return url.searchParams.get('v')
    }
    const regex = /^(\/live\/|\/v\/|\/watch\/)/
    const match = url.pathname.match(regex)
    if (match) {
        console.log(match[1]) // Outputs the matched string: "/live/", "/v/", or "/watch/"
        return url.pathname.split(match[1])[1]
    }
}

function displayError(text) {
    iframe.style.display = 'none'
    error.style.display = 'block'
    message.textContent = text
    const url = new URL(issues.href)
    url.searchParams.append('title', 'Video Load Error')
    url.searchParams.append(
        'body',
        `URL: ${window.location.href}\n\nAdd Additional Details Here:\n\n`
    )
    issues.href = url.href
}
