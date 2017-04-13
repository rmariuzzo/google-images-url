const colors = {
  'orange' : 'ic:specific,isc:orange',
  'yellow' : 'ic:specific,isc:yellow',
  'green' : 'ic:specific,isc:green',
  'teal' : 'ic:specific,isc:teal',
  'blue' : 'ic:specific,isc:blue',
  'purple' : 'ic:specific,isc:purple',
  'pink' : 'ic:specific,isc:pink',
  'white' : 'ic:specific,isc:white',
  'gray' : 'ic:specific,isc:gray',
  'black' : 'ic:specific,isc:black',
  'brown' : 'ic:specific,isc:brown'
}

const parse = (source) => {
  if (!source) {
    return ''
  } else if (typeof source === 'string') {
    const color = colors[source]
    if (color) {
      return color
    }
    console.warn('[google-images-url] Unknown color specified:', source)
    return ''
  } else {
    console.warn('[google-images-url] Invalid color specified:', source)
    return ''
  }
}

export {
  parse as default,
  colors
}
