function getUrl(path) {
    const href = 'http://tangjinlei.com/#article'
    const i = href.indexOf('#')
    const base = i >= 0 ? href.slice(0, i) : href
    return `${base}#${path}`
}

const res = getUrl('/about') // http://tangjinlei.com/#/about
console.log(res);
