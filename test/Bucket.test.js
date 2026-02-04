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
