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

    test('should not change length when overwriting an existing key', () => {
      hashmap.set('jakiro', 'icefire')

      hashmap.set('jakiro', 'dragon')
      expect(hashmap.length()).toBe(1)
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

    test('should return true if key exists ', () => {
      hashmap.set('snapfire', 'cookie')
      expect(hashmap.has('snapfire')).toBe(true)
    })
  })

  describe('remove method', () => {
    test('should return null for empty hash map', () => {
      expect(hashmap.remove('invoker')).toBeNull()
    })

    test('should return the value of an existing key and remove it', () => {
      hashmap.set('lich', 'frost')
      expect(hashmap.remove('lich')).toBe('frost')
      expect(hashmap.has('lich')).toBe(false)
    })
  })

  describe('length method', () => {
    test('should return length of they keys in the hash map', () => {
      expect(hashmap.length()).toBe(0)
    })

    test('should return correct length after adding keys', () => {
      hashmap.set('bane', 'nightmare')
      hashmap.set('mars', 'arena')
      expect(hashmap.length()).toBe(2)
    })

    test('should return correct length after removing keys', () => {
      hashmap.set('bristleback', 'goo')
      hashmap.set('timbersaw', 'chakram')

      hashmap.remove('timbersaw')
      expect(hashmap.length()).toBe(1)
    })

    test('should not decrement size if key does not exist in existing bucket', () => {

      hashmap.set('a', 'value1')
      hashmap.set('p', 'value2')

      hashmap.remove('nonExistent')

      expect(hashmap.length()).toBe(2)
    })
  })

})
