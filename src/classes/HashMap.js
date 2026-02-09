import Bucket from '../classes/Bucket.js'

class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor
    this.capacity = capacity
    this.buckets = new Array(this.capacity)
  }

  hash(key) {
    let hashCode = 0;
    const prime = 31;
    const MOD = 2 ** 32;

    for (let i = 0; i < key.length; i++) {
      hashCode = (prime * hashCode + key.charCodeAt(i)) % MOD;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key) % this.capacity

    if (!this.buckets[index]) this.buckets[index] = new Bucket()

    this.buckets[index].append(key, value)

    return value
  }

  get(key) {
    const index = this.hash(key) % this.capacity
    const bucket = this.buckets[index]

    if (!bucket) return null

    return bucket.find(key)
  }

  has(key) {
    const index = this.hash(key) % this.capacity
    const bucket = this.buckets[index]

    if (!bucket) return false

    return bucket.has(key)
  }

  remove(key) {
    const index = this.hash(key) % this.capacity
    const bucket = this.buckets[index]

    if (!bucket) return null

    return bucket.remove(key)
  }

  length() {
    return 0
  }
}

export default HashMap
