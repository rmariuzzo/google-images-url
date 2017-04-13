import { default as parse, colors } from '../../src/parsers/color'

test('Color parser should be a function', () => {
  expect(typeof parse).toBe('function')
})

test('Color parser should parse known colors', () => {
  Object.keys(colors).forEach((knownColor) => {
    expect(parse(knownColor)).toBe(colors[knownColor])
  })
})

test('Color parser should parse unknown colors as empty string', () => {
  const unknownColors = [
    'not-a-color',
    new Date(),
    [],
    {},
    true,
    false,
    undefined,
    Math.random()
  ]
  unknownColors.forEach((unknownColor) => {
    expect(parse(unknownColor)).toBe('')
  })
})
