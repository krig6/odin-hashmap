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

    test('should return different hash for different keys', () => {
      expect(hashmap.hash('beastmaster')).not.toBe(hashmap.hash('warlock'));
    });

    test('should handle very long keys without breaking', () => {
      const longKey = 'a'.repeat(1000);
      const hash1 = hashmap.hash(longKey);
      const hash2 = hashmap.hash(longKey);

      expect(typeof hash1).toBe('number');
      expect(hash1).toBe(hash2);
    });
  })

  describe('set method', () => {
    test('should add key-value pairs correctly', () => {
      const res = hashmap.set('razor', 'lightning')
      expect(res).toBe('lightning')
    })

    test('should overwrite existing value for same key', () => {
      hashmap.set('axe', 'berserk')
      const res = hashmap.set('axe', 'offlane')
      expect(res).toBe('offlane')
    })
  })

  describe('get method', () => {
    test('should return null for a non-existent key', () => {
      expect(hashmap.get('viper')).toBeNull()
    })

    test('should return value for an existing key', () => {
      hashmap.set('juggernaut', 'blade fury')
      expect(hashmap.get('juggernaut')).toBe('blade fury')
    })
  })

  describe('has method', () => {
    test('should return false when bucket is empty ', () => {
      expect(hashmap.has('largo')).toBe(false)

    })
  })
})
