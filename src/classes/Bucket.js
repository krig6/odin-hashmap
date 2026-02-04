import Node from "../classes/Node.js"

class Bucket {
  constructor() {
    this.head = null
    this.tail = null
  }

  append(key, value) {
    const newNode = new Node(key, value)
    if (this.head === null) {
      this.head = newNode
      this.tail = this.head
    }

    return newNode
  }
}

export default Bucket
