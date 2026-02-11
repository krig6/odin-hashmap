import Bucket from '../classes/Bucket.js';

class HashMap {
  constructor(loadFactor = 0.75, initialCapacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = initialCapacity;
    this.buckets = new Array(this.capacity);
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;
    const PRIME_MULTIPLIER = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (PRIME_MULTIPLIER * hashCode + key.charCodeAt(i));
    }

    return hashCode;
  }

  set(key, value) {
    const bucketIndex = this.hash(key) % this.capacity;

    if (!this.buckets[bucketIndex]) this.buckets[bucketIndex] = new Bucket();

    if (this.buckets[bucketIndex].has(key)) {
      this.buckets[bucketIndex].update(key, value);
    } else {
      this.buckets[bucketIndex].append(key, value);
      this.size++;
    }

    if (this.size / this.capacity > this.loadFactor) this._resize();

    return value;
  }

  get(key) {
    const bucketIndex = this.hash(key) % this.capacity;
    const bucket = this.buckets[bucketIndex];

    if (!bucket) return null;

    return bucket.find(key);
  }

  has(key) {
    const bucketIndex = this.hash(key) % this.capacity;
    const bucket = this.buckets[bucketIndex];

    if (!bucket) return false;

    return bucket.has(key);
  }

  remove(key) {
    const bucketIndex = this.hash(key) % this.capacity;
    const bucket = this.buckets[bucketIndex];

    if (!bucket) return null;

    const removedValue = bucket.remove(key);
    if (removedValue !== null) {
      this.size--;
    }

    return removedValue;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.capacity);
    this.size = 0;
  }

  keys() {
    if (!this.size) return [];

    const keysArray = [];

    for (const bucket of this.buckets) {
      if (bucket) {
        keysArray.push(...bucket.keys());
      }
    }

    return keysArray;
  }

  values() {
    if (!this.size) return [];

    const valuesArray = [];

    for (const bucket of this.buckets) {
      if (bucket) {
        valuesArray.push(...bucket.values());
      }
    }

    return valuesArray;
  }

  entries() {
    if (!this.size) return [];

    const entriesArray = [];

    for (const bucket of this.buckets) {
      if (bucket) {
        entriesArray.push(...bucket.entries());
      }
    }

    return entriesArray;
  }

  _resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity);

    for (const bucket of oldBuckets) {
      if (bucket) {
        for (const [key, value] of bucket.entries()) {
          const bucketIndex = this.hash(key) % this.capacity;
          if (!this.buckets[bucketIndex]) this.buckets[bucketIndex] = new Bucket();
          this.buckets[bucketIndex].append(key, value);
        }
      }
    }

  }

}

export default HashMap;
