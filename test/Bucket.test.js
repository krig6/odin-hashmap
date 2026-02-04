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
