import parseColor from './parsers/color'
import parseSize from './parsers/size'
import parseType from './parsers/type'
import parseTime from './parsers/time'
import parseSortBy from './parsers/sort-by'

// Default options.
const defaults = {
  size: null,
  color: null,
  type: null,
  group: null,
  showSizes: null,
  time: 'anytime',
  sortBy: null
}

/**
 * Parse value for a Google Images URL query.
 * @param  {String} source The source value.
 * @return {String}        The query value.
 */
const parseQuery = (source) => {
  if (!source) {
    return ''
  } else if (typeof source === 'string') {
    return encodeURIComponent(source)
  } else {
    console.warn('[google-images-url] Invalid query specified:', source)
    return ''
  }
}

/**
 * The Google Images URL API object which exposes the `create` function to
 * generate new URLs.
 * @type {Object}
 */
const GoogleImagesUrl = {
  /**
   * Create a Google Images URL.
   * @param  {String} [input=''] The query value.
   * @param  {Object} options    The options.
   * @return {String}            A ready to use Google Images URL.
   */
  create: (input = '', options) => {
    // Merge default options with provided one.
    options = Object.assign({}, defaults, options)
    // Parse each options.
    const query = parseQuery(input)
    const size = parseSize(options.size)
    const color = parseColor(options.color)
    const type = parseType(options.type)
    const time = parseTime(options.time)
    const sortBy = parseSortBy(options.sortBy)
    const showSizes = options.showSizes ? 'imgo:1' : ''
    // Create query string.
    const qs = [size, color, type, time, sortBy, showSizes]
      .filter(option => option)
      .join(',')
    // Create the final URL.
    return `https://www.google.com/search?q=${query}&tbs=${qs}&tbm=isch`
  }
}

module.exports = GoogleImagesUrl
