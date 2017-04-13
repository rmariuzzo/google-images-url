const types = {
  'face': 'itp:face',
  'photo': 'itp:photo',
  'clipart': 'itp:clipart',
  'lineart': 'itp:lineart',
  'animated': 'itp:animated'
}

const parse = (source) => {
  if (!source) {
    return ''
  } else if (typeof source === 'string') {
    const type = types[source]
    if (type) {
      return type
    }
    console.warn('[google-images-url] Unknown type specified:', source)
    return ''
  } else {
    console.warn('[google-images-url] Invalid type specified:', source)
    return ''
  }
}

export {
  parse as default,
  types
}
