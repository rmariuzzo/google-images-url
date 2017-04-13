import { default as parse, types } from '../../src/parsers/type'

test('Type parser should be a function', () => {
  expect(typeof parse).toBe('function')
})

test('Type parser should parse known types', () => {
  Object.keys(types).forEach((knownType) => {
    expect(parse(knownType)).toBe(types[knownType])
  })
})

test('Type parser should parse unknown types as empty string', () => {
  const unknownTypes = [
    'not-a-type',
    new Date(),
    [],
    {},
    true,
    false,
    undefined,
    Math.random()
  ]
  unknownTypes.forEach((unknownType) => {
    expect(parse(unknownType)).toBe('')
  })
})
