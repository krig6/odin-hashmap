import Node from "../src/classes/Node";

describe('Node class', () => {
  test('should create a node with key and value', () => {
    const node = new Node('luffy', 'rubber')
    expect(node.key).toBe('luffy')
    expect(node.value).toBe('rubber')
  })

  test('next should be null by default', () => {
    const node = new Node('zoro', 'santoryu')
    expect(node.next).toBeNull()
  })

  test('should allow next to be assigned another node', () => {
    const firstNode = new Node('merry', 'first')
    const secondNode = new Node('sunny', 'second')
    firstNode.next = secondNode

    expect(firstNode.next).toBe(secondNode)
    expect(firstNode.next.key).toBe('sunny')
    expect(firstNode.next.value).toBe('second')
  })
})
