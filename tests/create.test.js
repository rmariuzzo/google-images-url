const url = require('url')
import GoogleImagesUrl from '../src'

test('create function should exist', () => {
  expect(GoogleImagesUrl.create).toBeDefined()
})

test('should create an empty Google Images URL by default', () => {
  expect(GoogleImagesUrl.create()).toBeDefined()
})

test('should create a Google Images URL with specified query', () => {
  const query = 'query'
  const urlObject = url.parse(GoogleImagesUrl.create(query), true)
  expect(urlObject.query.q).toBe(query)
})
