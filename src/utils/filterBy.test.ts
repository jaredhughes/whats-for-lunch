import { filterBy } from './filterBy'

const mockData = [
  {
    keyA: "a",
    keyB: "b"
  },
  {
    keyA: "d",
    keyB: "e"
  }
]

describe('filterBy', () => {
  it('works', () => {
    const result = filterBy(mockData, "keyA", "a")

    expect(result).toEqual([{ "keyA": "a", "keyB": "b" }])
  })
})
