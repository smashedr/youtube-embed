;(function () {
    console.debug('index.js')

    const searchParams = new URLSearchParams(window.location.search)
    const source = searchParams.get('source')
    console.debug('source:', source)
    if (!source) {
        return console.warn('No source in query string:', searchParams)
    }

    const url = new URL(source)
    const id = url.searchParams.get('v')
    console.debug('id:', id)
    if (!id) {
        return console.warn('No id in source query string:', url)
    }

    const iframe = document.querySelector('iframe')
    iframe.src = `https://www.youtube.com/embed/${id}`
})()
