import { default as parse, sortBys } from '../../src/parsers/sort-by'

test('SortBy parser should be a function', () => {
  expect(typeof parse).toBe('function')
})

test('SortBy parser should parse known sorting values', () => {
  Object.keys(sortBys).forEach((knownSortBy) => {
    expect(parse(knownSortBy)).toBe(sortBys[knownSortBy])
  })
})

test('SortBy parser should parse unknown colors as empty string', () => {
  const unknownSortBys = [
    'not-a-color',
    new Date(),
    [],
    {},
    true,
    false,
    undefined,
    Math.random()
  ]
  unknownSortBys.forEach((unknownSortBy) => {
    expect(parse(unknownSortBy)).toBe('')
  })
})
