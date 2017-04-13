import { default as parse, times } from '../../src/parsers/time'

test('Time parser should be a function', () => {
  expect(typeof parse).toBe('function')
})

test('Time parser should parse known times', () => {
  Object.keys(times).forEach((knownTime) => {
    expect(parse(knownTime)).toBe(times[knownTime])
  })
})

test('Time parser should parse custom date range', () => {
  const customDateRange = {
    from: '12/01/2015',
    to: '12/31/2015'
  }
  expect(parse(customDateRange)).toBe(`cdr:1,cd_min:${customDateRange.from},cd_max${customDateRange.to}`)
})

test('Time parser should parse unknown times as empty string', () => {
  const unknownTimes = [
    'not-a-time',
    new Date(),
    [],
    {},
    true,
    false,
    undefined,
    Math.random()
  ]
  unknownTimes.forEach((unknownTime) => {
    expect(parse(unknownTime)).toBe('')
  })
})
