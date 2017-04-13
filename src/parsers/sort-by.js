const sortBys = {
  'date': 'sbd:1',
  'relevance': 'sbd:0'
}

const parse = (source) => {
  if (!source) {
    return ''
  } else if (typeof source === 'string') {
    const sortBy = sortBys[source]
    if (sortBy) {
      return sortBy
    }
    console.warn('[google-images-url] Unknown sortBy specified:', source)
    return ''
  } else {
    console.warn('[google-images-url] Invalid sortBy specified:', source)
    return ''
  }
}

export {
  parse as default,
  sortBys
}
