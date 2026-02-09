class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor
    this.capacity = capacity
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
}

export default HashMap
