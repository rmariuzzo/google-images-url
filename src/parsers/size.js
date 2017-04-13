const sizes = {
  'icon': 'isz:i',
  'medium': 'isz:m',
  'large': 'isz:l'
}

const parse = (source) => {
  if (!source) {
    return ''
  } else if (typeof source === 'string') {
    const size = sizes[source]
    if (size) {
      return size
    }
    console.warn('[google-images-url] Unknown size specified:', source)
    return ''
  } else if (source.width && source.height) {
    return `isz:ex,iszw:${source.width},iszh:${source.height}`
  } else {
    console.warn('[google-images-url] Invalid size specified:', source)
    return ''
  }
}

export {
  parse as default,
  sizes
}
