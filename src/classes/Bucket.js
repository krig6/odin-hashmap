import Node from "../classes/Node.js"

class Bucket {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
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

    this.size++
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
        this.size--
        return currentNode.value
      }
      previousNode = currentNode
      currentNode = currentNode.next
    }
    return null
  }

  update(key, value) {
    if (this.head === null) return null

    let currentNode = this.head

    while (currentNode !== null) {
      if (currentNode.key === key) {
        currentNode.value = value
        return currentNode
      }
      currentNode = currentNode.next
    }

    return null
  }

  has(key) {
    if (this.head === null) return false

    let currentNode = this.head

    while (currentNode) {
      if (currentNode.key === key) return true
      currentNode = currentNode.next
    }

    return false
  }

  keys() {
    if (this.head === null) return []

    const keysArray = []
    let currentNode = this.head

    while (currentNode) {
      keysArray.push(currentNode.key)
      currentNode = currentNode.next
    }

    return keysArray
  }

  values() {
    if (this.head === null) return []

    const valuesArray = []
    let currentNode = this.head

    while (currentNode) {
      valuesArray.push(currentNode.value)
      currentNode = currentNode.next
    }

    return valuesArray
  }

  entries() {
    if (this.head === null) return []

    const keyValueArr = []
    let currentNode = this.head

    while (currentNode) {
      keyValueArr.push([currentNode.key, currentNode.value])
      currentNode = currentNode.next
    }

    return keyValueArr
  }

  length() {
    return this.size
  }

  clear() {
    if (this.head === null) return
  }

}

export default Bucket
