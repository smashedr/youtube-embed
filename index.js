console.debug('index.js')

const searchParams = new URLSearchParams(window.location.search)
const source = searchParams.get('source')
console.debug('source:', source)

const url = new URL(source)
const id = url.searchParams.get('v')
console.debug('id:', id)

const iframe = document.querySelector('iframe')
iframe.src = `https://www.youtube.com/embed/${id}`
