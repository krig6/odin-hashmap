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
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    return newNode
  }

  find(key) {
    if (this.head === null) return null

    let currentNode = this.head

    while (currentNode !== null) {
      if (currentNode.key === key) return currentNode.value
      currentNode = currentNode.next
    }

    return null
  }

  remove(key) {
    if (this.head === null) return null

    let currentNode = this.head
    let previousNode = null

    while (currentNode !== null) {
      if (currentNode.key === key) {
        if (currentNode === this.head) {
          this.head = currentNode.next
          if (currentNode === this.tail) {
            this.tail = null
          }
        } else {
          previousNode.next = currentNode.next

          if (currentNode === this.tail) {
            this.tail = previousNode
          }

        }
        return currentNode.value
      }
      previousNode = currentNode
      currentNode = currentNode.next
    }
    return null
  }

  update(key, value) {
    if (this.head === null) return null

    return null
  }

}

export default Bucket
