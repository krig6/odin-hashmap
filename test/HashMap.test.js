import HashMap from "../src/classes/HashMap.js"

describe('HashMap class', () => {
  let hashmap

  beforeEach(() => {
    hashmap = new HashMap()
  })

  describe('hashmap load factor', () => {
    test('should have a default load factor 0.75', () => {
      expect(hashmap.loadFactor).toBe(0.75)
    })
  })

  describe('hashmap capacity', () => {
    test('should have a default capacity', () => {
      expect(hashmap.capacity).toBe(16)
    })
  })

  describe('hash method', () => {
    test('should return a number for a string key', () => {
      const result = hashmap.hash('rubick')
      expect(typeof result).toBe('number')
    })

    test('should return same hash for the same key', () => {
      expect(hashmap.hash('tidehunter')).toBe(hashmap.hash('tidehunter'))
    })
  })
})
