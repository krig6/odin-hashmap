import Bucket from "../src/classes/Bucket";

describe('Bucket class', () => {
  let bucket;

  beforeEach(() => {
    bucket = new Bucket();
  });

  describe('append method', () => {
    test('adds first node to empty bucket', () => {
      const node = bucket.append('nami', 'compass');

      expect(bucket.head).toBe(node);
      expect(bucket.tail).toBe(node);
      expect(node.next).toBeNull();
    });

    test('adds subsequent nodes correctly', () => {
      const first = bucket.append('usopp', 'slingshot');
      const second = bucket.append('sanji', 'cigarette');

      expect(bucket.head).toBe(first);
      expect(bucket.tail).toBe(second);
      expect(first.next).toBe(second);
      expect(second.next).toBeNull();
    });
  });

  describe('find method', () => {
    test('returns null if bucket is empty', () => {
      expect(bucket.find('robin')).toBeNull();
    });

    test('returns value by key', () => {
      bucket.append('franky', 'ship');
      bucket.append('brook', 'guitar');

      expect(bucket.find('brook')).toBe('guitar');
    });

    test('returns null when key does not exist', () => {
      bucket.append('jinbe', 'yukata');
      expect(bucket.find('luffy')).toBeNull();
    });

    test('handles multiple nodes with same value but different keys', () => {
      bucket.append('luffy', 'pirate');
      bucket.append('zoro', 'pirate');
      bucket.append('sanji', 'pirate');

      expect(bucket.find('luffy')).toBe('pirate');
      expect(bucket.find('zoro')).toBe('pirate');
      expect(bucket.find('sanji')).toBe('pirate');
    });
  });

  describe('remove method', () => {
    test('returns null if bucket is empty', () => {
      expect(bucket.remove('nami')).toBeNull();
    });

    test('removes single node bucket', () => {
      bucket.append('sanji', 'cigarette');
      expect(bucket.remove('sanji')).toBe('cigarette');
      expect(bucket.find('sanji')).toBeNull();
    });

    test('removes node in multi-node bucket', () => {
      bucket.append('zoro', 'santoryu');
      bucket.append('chopper', 'pill');
      bucket.append('franky', 'cola');

      expect(bucket.remove('chopper')).toBe('pill');
      expect(bucket.find('zoro')).toBe('santoryu');
      expect(bucket.find('chopper')).toBeNull();
      expect(bucket.find('franky')).toBe('cola');
    });

    test('removes tail node correctly', () => {
      bucket.append('luffy', 'strawhat');
      bucket.append('zoro', 'santoryu');
      bucket.append('nami', 'compass');

      expect(bucket.remove('nami')).toBe('compass');
      expect(bucket.tail.key).toBe('zoro');
    });

    test('non-existent key does not affect bucket', () => {
      bucket.append('rick', 'inventor');
      bucket.append('morty', 'crybaby');

      expect(bucket.remove('summer')).toBeNull();
    });
  });

  describe('update method', () => {
    test('returns null for empty bucket', () => {
      expect(bucket.update('sunny', 'ship')).toBeNull();
    });

    test('returns null when key does not exist', () => {
      bucket.append('garp', 'marine');
      bucket.append('whitebeard', 'earthquake');

      expect(bucket.update('sengoku', 'buddha')).toBeNull();
    });

    test('updates value for existing key', () => {
      bucket.append('land', 'giants');
      bucket.append('sea', 'fishmen');

      const updated = bucket.update('sea', 'pirates');
      expect(updated.key).toBe('sea');
      expect(updated.value).toBe('pirates');
    });
  });

  describe('has method', () => {
    test('returns false when bucket is empty', () => {
      expect(bucket.has('roger')).toBe(false);
    });

    test('returns false if key does not exist', () => {
      bucket.append('dragon', 'father');
      bucket.append('ace', 'brother');
      expect(bucket.has('doflamingo')).toBe(false);
    });

    test('returns true if key exists', () => {
      bucket.append('fruit', 'powers');
      bucket.append('vegetable', 'health');
      expect(bucket.has('vegetable')).toBe(true);
    });
  });

  describe('keys method', () => {
    test('returns empty array for empty bucket', () => {
      expect(bucket.keys()).toEqual([]);
    });

    test('returns all keys in bucket', () => {
      bucket.append('luffy', 'strawhat');
      bucket.append('zoro', 'santoryu');
      bucket.append('brook', 'violin');
      bucket.append('nami', 'compass');
      bucket.append('usopp', 'slingshot');
      bucket.append('vegetable', 'health');

      expect(bucket.keys()).toEqual(
        expect.arrayContaining(['luffy', 'zoro', 'brook', 'nami', 'usopp', 'vegetable'])
      );
    });
  });

  describe('values method', () => {
    test('returns empty array for empty bucket', () => {
      expect(bucket.values()).toEqual([]);
    });

    test('returns all values in bucket', () => {
      bucket.append('luffy', 'strawhat');
      bucket.append('zoro', 'santoryu');
      bucket.append('brook', 'violin');
      bucket.append('nami', 'compass');
      bucket.append('usopp', 'slingshot');
      bucket.append('vegetable', 'health');

      expect(bucket.values()).toEqual(
        expect.arrayContaining(['strawhat', 'santoryu', 'violin', 'compass', 'slingshot', 'health'])
      );
    });
  });

  describe('entries method', () => {
    test('returns empty array for empty bucket', () => {
      expect(bucket.entries()).toEqual([]);
    });

    test('returns all [key, value] pairs', () => {
      bucket.append('luffy', 'strawhat');
      bucket.append('zoro', 'santoryu');
      bucket.append('brook', 'violin');
      bucket.append('nami', 'compass');
      bucket.append('usopp', 'slingshot');
      bucket.append('vegetable', 'health');

      expect(bucket.entries()).toEqual(
        expect.arrayContaining([
          ['luffy', 'strawhat'],
          ['zoro', 'santoryu'],
          ['brook', 'violin'],
          ['nami', 'compass'],
          ['usopp', 'slingshot'],
          ['vegetable', 'health']
        ])
      );
    });
  });

  describe('length method', () => {
    test('returns 0 for empty bucket', () => {
      expect(bucket.length()).toBe(0);
    });

    test('increments when node is appended', () => {
      bucket.append('rick', 'genius');
      expect(bucket.length()).toBe(1);
    });

    test('decrements when node is removed', () => {
      bucket.append('morty', 'student');
      bucket.remove('morty');
      expect(bucket.length()).toBe(0);
    });

    test('does not change for non-existent key removal', () => {
      bucket.append('rick', 'inventor');
      bucket.append('morty', 'crybaby');
      bucket.remove('summer');
      expect(bucket.length()).toBe(2);
    });
  });

  describe('clear method', () => {
    test('does nothing if bucket is empty', () => {
      bucket.clear();
      expect(bucket.head).toBeNull();
      expect(bucket.tail).toBeNull();
      expect(bucket.length()).toBe(0);
    });

    test('removes all nodes if bucket is non-empty', () => {
      bucket.append('luffy', 'strawhat');
      bucket.append('zoro', 'santoryu');
      bucket.append('nami', 'compass');
      bucket.clear();
      expect(bucket.head).toBeNull();
      expect(bucket.tail).toBeNull();
      expect(bucket.length()).toBe(0);
    });
  });
});
