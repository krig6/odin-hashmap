import Node from "../src/classes/Node";

describe('Node class', () => {
  test('should create a node with key and value', () => {
    const node = new Node('luffy', 'rubber')
    expect(node.key).toBe('luffy')
    expect(node.value).toBe('rubber')
  })
})
