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
})
