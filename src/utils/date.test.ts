import * as Date from './date'

const future = '2100-01-10'
const past = '2000-01-10'

describe('Date', () => {
  describe('isBefore', () => {
    it('returns true for future timestamp string', () => {
      const result = Date.isBefore(future)
      expect(result).toBe(true)
    })

    it('returns false for past timestamp string', () => {
      const result = Date.isBefore(past)
      expect(result).toBe(false)
    })

    it('throws on invalid input', () => {
      expect(() => Date.isBefore('invalid')).toThrowError()
    })
  })

  describe('isAfter', () => {
    it('returns true for past timestamp string', () => {
      const result = Date.isAfter(past)
      expect(result).toBe(true)
    })

    it('returns false for future timestamp string', () => {
      const result = Date.isAfter(future)
      expect(result).toBe(false)
    })

    it('throws on invalid input', () => {
      expect(() => Date.isAfter('invalid')).toThrowError()
    })
  })
})
