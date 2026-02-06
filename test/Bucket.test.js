import Bucket from "../src/classes/Bucket";

describe('Bucket class - append method', () => {
  describe('append method', () => {
    test('append: should add first node to empty bucket', () => {
      const bucket = new Bucket()
      const node = bucket.append('nami', 'compass')

      expect(bucket.head).toBe(node)
      expect(bucket.tail).toBe(node)
      expect(node.next).toBeNull
    })

    test('append: should add second node as the next node', () => {
      const bucket = new Bucket()
      const firstNode = bucket.append('usopp', 'slingshot')
      const secondNode = bucket.append('sanji', 'cigarette')

      expect(bucket.head).toBe(firstNode)
      expect(bucket.tail).toBe(secondNode)
      expect(firstNode.next).toBe(secondNode)
      expect(secondNode.next).toBeNull()
    })
  })
})


describe('Bucket class - find method', () => {
  test('find: returns null if bucket is empty', () => {
    const bucket = new Bucket()
    const result = bucket.find('robin')

    expect(result).toBeNull()
  })

  test('find: returns the node by key', () => {
    const bucket = new Bucket()
    const first = bucket.append('franky', 'ship')
    const second = bucket.append('brook', 'guitar')
    const result = bucket.find('brook')

    expect(result).toBe('guitar')
  })

  test('find: returns null when key does not exist', () => {
    const bucket = new Bucket()
    const first = bucket.append('jinbe', 'yukata')
    const result = bucket.find('luffy')

    expect(result).toBeNull()
  })

  test('find: handles multiple nodes with the same value but different keys', () => {
    const bucket = new Bucket()
    const first = bucket.append('luffy', 'pirate')
    const second = bucket.append('zoro', 'pirate')
    const third = bucket.append('sanji', 'pirate')

    expect(bucket.find('luffy')).toBe('pirate')
    expect(bucket.find('zoro')).toBe('pirate')
    expect(bucket.find('sanji')).toBe('pirate')
  })
})

describe('Bucket class - remove method', () => {
  test('remove: returns null if bucket is empty', () => {
    const bucket = new Bucket()
    const result = bucket.remove('nami')

    expect(result).toBeNull()
  })

  test('remove: handles removal when bucket has only one node', () => {
    const bucket = new Bucket()
    const node = bucket.append('sanji', 'cigarette')
    const result = bucket.remove('sanji')

    expect(result).toBe('cigarette')
    expect(bucket.find('sanji')).toBeNull()
  })

  test('remove: handles removal when bucket has multiple nodes', () => {
    const bucket = new Bucket()
    const firstNode = bucket.append('zoro', 'santoryu')
    const secondNode = bucket.append('chopper', 'pill')
    const thirdNode = bucket.append('franky', 'cola')
    const result = bucket.remove('chopper')

    expect(bucket.find('zoro')).toBe('santoryu')
    expect(bucket.find('chopper')).toBeNull()
    expect(bucket.find('franky')).toBe('cola')
    expect(result).toBe('pill')
  })

  test('remove: removes tail node in multi-node bucket', () => {
    const bucket = new Bucket()
    const firstNode = bucket.append('luffy', 'strawhat')
    const secondNode = bucket.append('zoro', 'santoryu')
    const thirdNode = bucket.append('nami', 'compass')
    const result = bucket.remove('nami')

    expect(result).toBe('compass')
    expect(bucket.tail.key).toBe('zoro')
  })

  test('remove: returns null for non-existent key', () => {
    const bucket = new Bucket()
    const result = bucket.remove('merry')

    expect(result).toBeNull()
  })
})

describe('Bucket class - update method', () => {
  test('update: returns null for empty bucket', () => {
    const bucket = new Bucket()

    expect(bucket.update('sunny', 'ship')).toBeNull()
  })

  test('update: returns null when key does not exist in a multi-node bucket', () => {
    const bucket = new Bucket()
    bucket.append('garp', 'marine')
    bucket.append('whitebeard', 'earthquake')

    expect(bucket.update('sengoku', 'buddha')).toBeNull()
  })

  test('update: returns the node when key exists and value is updated', () => {
    const bucket = new Bucket()
    bucket.append('land', 'giants')
    bucket.append('sea', 'fishmen')
    const result = bucket.update('sea', 'pirates')

    expect(result.key).toBe('sea')
    expect(result.value).toBe('pirates')
  })
})













