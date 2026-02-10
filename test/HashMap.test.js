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
    test('should return false when hashmap is empty', () => {
      expect(hashmap.has('largo')).toBe(false)
    })

    test('should return true if key exists', () => {
      hashmap.set('snapfire', 'cookie')
      expect(hashmap.has('snapfire')).toBe(true)
    })
  })

  describe('remove method', () => {
    test('should return null for empty hashmap', () => {
      expect(hashmap.remove('invoker')).toBeNull()
    })

    test('should return the value of an existing key and remove it', () => {
      hashmap.set('lich', 'frost')
      expect(hashmap.remove('lich')).toBe('frost')
      expect(hashmap.has('lich')).toBe(false)
    })
  })

  describe('length method', () => {
    test('should return 0 for empty hashmap', () => {
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

    test('should not decrement length when removing non-existent keys', () => {
      hashmap.set('a', 'value1')
      hashmap.set('p', 'value2')
      hashmap.remove('nonExistent')
      expect(hashmap.length()).toBe(2)
    })
  })

  describe('clear method', () => {
    test('should reset the hashmap length to 0', () => {
      hashmap.set('weaver', 'bug')
      hashmap.set('nyx', 'carapace')
      expect(hashmap.length()).toBe(2)
      hashmap.clear()
      expect(hashmap.length()).toBe(0)
    })

    test('should remove all existing keys', () => {
      hashmap.set('chen', 'creeps')
      hashmap.set('abaddon', 'shield')
      hashmap.clear()
      expect(hashmap.get('chen')).toBeNull()
      expect(hashmap.get('abaddon')).toBeNull()
    })

    test('should allow new keys to be set after clearing', () => {
      hashmap.set('alchemist', 'coins')
      hashmap.set('visage', 'familiars')
      hashmap.clear()
      hashmap.set('clinkz', 'bones')
      expect(hashmap.length()).toBe(1)
      expect(hashmap.get('clinkz')).toBe('bones')
    })
  })

  describe('keys method', () => {
    test('returns empty array for empty hashmap', () => {
      expect(hashmap.keys()).toEqual([])
    })

    test('returns all keys in hashmap', () => {
      hashmap.set('juggernaut', 'blade fury');
      hashmap.set('crystal_maiden', 'frostbite');
      hashmap.set('axe', 'berserk');
      hashmap.set('pudge', 'meat hook');
      hashmap.set('storm_spirit', 'ball lightning');
      hashmap.set('phantom_assassin', 'stifling dagger');

      expect(hashmap.keys()).toEqual(
        expect.arrayContaining(['juggernaut', 'crystal_maiden', 'axe', 'pudge', 'storm_spirit', 'phantom_assassin'])
      );
    });
  })

  describe('values method', () => {
    test('returns empty array for empty hashmap', () => {
      expect(hashmap.values()).toEqual([]);
    });

    test('returns all values in hashmap', () => {
      hashmap.set('juggernaut', 'blade fury');
      hashmap.set('crystal_maiden', 'frostbite');
      hashmap.set('axe', 'berserk');
      hashmap.set('pudge', 'meat hook');
      hashmap.set('storm_spirit', 'ball lightning');
      hashmap.set('phantom_assassin', 'stifling dagger');

      expect(hashmap.values()).toEqual(
        expect.arrayContaining(['blade fury', 'frostbite', 'berserk', 'meat hook', 'ball lightning', 'stifling dagger'])
      );
    });
  });

  describe('entries method', () => {
    test('returns empty array for empty hashmap', () => {
      expect(hashmap.entries()).toEqual([]);
    });

    test('returns all [key, value] pairs', () => {
      hashmap.set('juggernaut', 'blade fury');
      hashmap.set('crystal_maiden', 'frostbite');
      hashmap.set('axe', 'berserk');
      hashmap.set('pudge', 'meat hook');
      hashmap.set('storm_spirit', 'ball lightning');
      hashmap.set('phantom_assassin', 'stifling dagger');

      expect(hashmap.entries()).toEqual(
        expect.arrayContaining([
          ['juggernaut', 'blade fury'],
          ['crystal_maiden', 'frostbite'],
          ['axe', 'berserk'],
          ['pudge', 'meat hook'],
          ['storm_spirit', 'ball lightning'],
          ['phantom_assassin', 'stifling dagger']
        ])
      );
    });
  });

  describe('resize method', () => {
    test('doubles capacity when load factor exceeded', () => {
      const smallMap = new HashMap(0.75, 4);
      smallMap.set('juggernaut', 'blade fury');
      smallMap.set('crystal_maiden', 'frostbite');
      smallMap.set('axe', 'berserk');
      expect(smallMap.capacity).toBe(4);
      smallMap.set('pudge', 'meat hook');
      expect(smallMap.capacity).toBe(8);
    })

    test('preserves all entries after resizing', () => {
      const smallMap = new HashMap(0.75, 4);
      smallMap.set('juggernaut', 'blade fury');
      smallMap.set('crystal_maiden', 'frostbite');
      smallMap.set('axe', 'berserk');
      smallMap.set('pudge', 'meat hook');
      expect(smallMap.get('juggernaut')).toBe('blade fury');
      expect(smallMap.get('crystal_maiden')).toBe('frostbite');
      expect(smallMap.get('axe')).toBe('berserk');
      expect(smallMap.get('pudge')).toBe('meat hook');
    });

    test('allows adding new keys after resizing', () => {
      const smallMap = new HashMap(0.75, 4);
      smallMap.set('juggernaut', 'blade fury');
      smallMap.set('crystal_maiden', 'frostbite');
      smallMap.set('axe', 'berserk');
      smallMap.set('pudge', 'meat hook');
      smallMap.set('storm_spirit', 'ball lightning');
      smallMap.set('phantom_assassin', 'stifling dagger');
      expect(smallMap.length()).toBe(6);
      expect(smallMap.get('storm_spirit')).toBe('ball lightning');
      expect(smallMap.get('phantom_assassin')).toBe('stifling dagger');
    });
  })
})
