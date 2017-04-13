const defaults = {
  size: null,
  color: null,
  type: null,
  group: null,
  showSizes: null,
  time: 'anytime',
  sortBy: null
}

const sizes = {
  'icon': 'isz:i',
  'medium': 'isz:m',
  'large': 'isz:l'
}

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

const types = {
  'face': 'itp:face',
  'photo': 'itp:photo',
  'clipart': 'itp:clipart',
  'lineart': 'itp:lineart',
  'animated': 'itp:animated'
}

const times = {
  'anytime': 'qdr:a',
  'second': 'qdr:s',
  'minute': 'qdr:n',
  'hour': 'qdr:h',
  'day': 'qdr:d',
  'week': 'qdr:w',
  'month': 'qdr:m',
  'year': 'qdr:year'
}

const sortBys = {
  'date': 'sbd:1',
  'relevance': 'sbd:0'
}

const parseInput = (source) => {
  if (!source) {
    return ''
  } else if (typeof source === 'string') {
    return encodeURIComponent(source)
  } else {
    console.warn('[google-images-url:parseInput] Invalid input specified:', source)
    return ''
  }
}

const parseSize = (source) => {
  if (!source) {
    return ''
  } else if (typeof source === 'string') {
    const size = sizes[source]
    if (size) {
      return size
    }
    console.warn('[google-images-url:parseSize] Unknown size specified:', source)
    return ''
  } else if (source.width && source.height) {
    return `isz:ex,iszw:${source.width},iszh:${source.height}`
  } else {
    console.warn('[google-images-url:parseSize] Invalid size specified:', source)
    return ''
  }
}

const parseColor = (source) => {
  if (!source) {
    return ''
  } else if (typeof source === 'string') {
    const color = colors[source]
    if (color) {
      return color
    }
    console.warn('[google-images-url:parseColor] Unknown color specified:', source)
    return ''
  } else {
    console.warn('[google-images-url:parseColor] Invalid color specified:', source)
    return ''
  }
}

const parseType = (source) => {
  if (!source) {
    return ''
  } else if (typeof source === 'string') {
    const type = types[source]
    if (type) {
      return type
    }
    console.warn('[google-images-url:parseType] Unknown type specified:', source)
    return ''
  } else {
    console.warn('[google-images-url:parseType] Invalid type specified:', source)
    return ''
  }
}

const parseTime = (source) => {
  if (!source) {
    return ''
  } else if (typeof source === 'string') {
    const time = times[source]
    if (time) {
      return time
    }
    console.warn('[google-images-url:parseTime] Unknown time specified:', source)
    return ''
  } else if (source.from && source.to) {
    return `cdr:1,cd_min:${source.from},cd_max${source.to}`
  } else {
    console.warn('[google-images-url:parseTime] Invalid time specified:', source)
    return ''
  }
}

const parseSortBy = (source) => {
  if (!source) {
    return ''
  } else if (typeof source === 'string') {
    const sortBy = sortBys[source]
    if (sortBy) {
      return sortBy
    }
    console.warn('[google-images-url:parseSortBy] Unknown sortBy specified:', source)
    return ''
  } else {
    console.warn('[google-images-url:parseSortBy] Invalid sortBy specified:', source)
    return ''
  }
}

const GoogleImagesUrl = {
  create: (input = '', options = defaults) => {
    options = Object.assign({}, defaults, options)

    const query = parseInput(input)
    const size = parseSize(options.size)
    const color = parseColor(options.color)
    const type = parseType(options.type)
    const time = parseTime(options.time)
    const sortBy = parseSortBy(options.sortBy)
    const showSizes = options.showSizes ? 'imgo:1' : ''

    const qs = [size, color, type, time, sortBy, showSizes]
      .filter(option => option)
      .join(',')
    return `https://www.google.com/search?q=${query}&tbs=${qs}&tbm=isch`
  }
}

module.exports = GoogleImagesUrl
