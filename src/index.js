import HashMap from '../src/classes/HashMap.js';

// Create a new hash map instance with default load factor 0.75
const test = new HashMap();

// Initial population
const initialEntries = [
  ['apple', 'red'],
  ['banana', 'yellow'],
  ['carrot', 'orange'],
  ['dog', 'brown'],
  ['elephant', 'gray'],
  ['frog', 'green'],
  ['grape', 'purple'],
  ['hat', 'black'],
  ['ice cream', 'white'],
  ['jacket', 'blue'],
  ['kite', 'pink'],
  ['lion', 'golden']
];

initialEntries.forEach(([key, value]) => test.set(key, value));

console.log('--- Initial Population ---');
console.log('Length:', test.length()); // should be 12
console.log('Capacity:', test.capacity); // depends on your implementation
console.log('Load factor:', test.length() / test.capacity);

// Overwrite a few nodes
test.set('apple', 'green');
test.set('banana', 'ripe yellow');
test.set('dog', 'dark brown');

console.log('--- After Overwriting ---');
console.log('Length (should still be 12):', test.length());
console.log('Get apple:', test.get('apple')); // green
console.log('Get banana:', test.get('banana')); // ripe yellow
console.log('Get dog:', test.get('dog')); // dark brown

// Trigger growth by adding one more entry
test.set('moon', 'silver');

console.log('--- After Growth ---');
console.log('Length (should be 13):', test.length());
console.log('Capacity (should have doubled):', test.capacity);

// Test other methods
console.log('Has lion:', test.has('lion')); // true
console.log('Has sun:', test.has('sun')); // false

console.log('Remove hat:', test.remove('hat')); // true
console.log('Remove sun (not exists):', test.remove('sun')); // false

console.log('Keys:', test.keys()); // should include all keys except 'hat'
console.log('Values:', test.values()); // should match corresponding values
console.log('Entries:', test.entries()); // array of [key, value] pairs

// Clear hash map
test.clear();
console.log('--- After Clear ---');
console.log('Length (should be 0):', test.length());
console.log('Keys (should be empty):', test.keys());
console.log('Values (should be empty):', test.values());
console.log('Entries (should be empty):', test.entries());
