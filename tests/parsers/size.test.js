import { default as parse, sizes } from '../../src/parsers/size'

test('Size parser should be a function', () => {
  expect(typeof parse).toBe('function')
})

test('Size parser should parse known sizes', () => {
  Object.keys(sizes).forEach((size) => {
    expect(parse(size)).toBe(sizes[size])
  })
})

test('Size parser should parse custom sizes', () => {
  const customSize = { width: 800, height: 600 }
  expect(parse(customSize)).toBe(`isz:ex,iszw:${customSize.width},iszh:${customSize.height}`)
})

test('Size parser should parse unknown sizes as empty string', () => {
  const unknownSizes = [
    'not-a-size',
    new Date(),
    [],
    {},
    true,
    false,
    undefined,
    Math.random()
  ]
  unknownSizes.forEach((unknownSize) => {
    expect(parse(unknownSize)).toBe('')
  })
})
