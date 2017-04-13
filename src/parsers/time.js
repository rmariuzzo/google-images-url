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

const parse = (source) => {
  if (!source) {
    return ''
  } else if (typeof source === 'string') {
    const time = times[source]
    if (time) {
      return time
    }
    console.warn('[google-images-url] Unknown time specified:', source)
    return ''
  } else if (source.from && source.to) {
    return `cdr:1,cd_min:${source.from},cd_max${source.to}`
  } else {
    console.warn('[google-images-url] Invalid time specified:', source)
    return ''
  }
}

export {
  parse as default,
  times
}
