const error = document.getElementById('error')
const message = document.getElementById('message')
const iframe = document.querySelector('iframe')

;(function () {
    console.debug('index.js')

    const searchParams = new URLSearchParams(window.location.search)
    const source = searchParams.get('source')
    console.debug('source:', source)
    if (!source) {
        displayError('No source in the query string.')
        return console.warn('No source in query string:', searchParams)
    }

    const url = new URL(source)
    const id = url.searchParams.get('v')
    console.debug('id:', id)
    if (!id) {
        displayError('No v in source query string.')
        return console.warn('No v in source query string:', url)
    }

    const src = `https://www.youtube.com/embed/${id}`
    iframe.src = src
    console.log(`Embed URL: ${src}`)
    document.title = `${document.title}: ${id}`
})()

function displayError(text) {
    iframe.style.display = 'none'
    error.style.display = 'block'
    message.textContent = text
}
