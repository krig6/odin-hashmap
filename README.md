# Project: HashMap

A hash map is a data structure that stores key-value pairs and allows fast access, insertion, and deletion by computing a hash code for each key to determine its storage location. Internally, values are organized in buckets, and the structure can dynamically resize to maintain performance as more entries are added.

## Features

- **Key-Value Storage:** Stores entries as key-value pairs for fast lookup, insertion, and deletion.

- **Bucket-based Storage:** Uses linked list buckets internally to organize entries.

- **Collision Handling:** Resolves hash collisions by storing multiple entries in the same bucket using a linked list.

- **Dynamic Resizing:** Automatically doubles capacity when the load factor is exceeded to maintain performance.

- **Customizable and Extendable:** The project structure separates `Node`, `Bucket`, and `HashMap` classes, making it easy to add new methods or modify existing ones.

## Getting Started

Follow these steps to get started with the **HashMap** project:

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone git@github.com:krig6/odin-hashmap.git
cd odin-hashmap
```

### 2. Install Dependencies

To install the necessary dependencies, run:

```bash
npm install
```

### 3. Run Demo

```bash
npm run start
```

This will execute the demo in `src/index.js` to showcase `HashMap` functionality in the console.

## Methods

| Method | Description |
|--------|-------------|
| `set(key, value)` | Adds or updates a key-value pair. Automatically handles collisions and resizes if needed. |
| `get(key)` | Returns the value for the given key, or `null` if not found. |
| `has(key)` | Checks if the key exists; returns `true` or `false`. |
| `remove(key)` | Removes the key-value pair and returns the removed value, or `null` if not found. |
| `length()` | Returns the number of entries in the HashMap. |
| `clear()` | Removes all entries and resets the size to zero. |
| `keys()` | Returns an array of all keys. |
| `values()` | Returns an array of all values. |
| `entries()` | Returns an array of `[key, value]` pairs. |
| `_resize()` | Internal method. Doubles capacity and rehashes all entries (not for external use). |

## Project Structure
```
.
├── src/
│   ├── classes/
│   │   ├── Bucket.js      # Implements the Bucket class (linked list) for handling hash collisions
│   │   ├── HashMap.js     # Implements the HashMap class with key-value storage, hashing, and dynamic resizing
│   │   └── Node.js        # Implements the Node class used by Bucket to store key-value pairs
│   └── index.js           # Demo script to test the HashMap class and demonstrate its functionality
├── test/
│   ├── Bucket.test.js     # Unit tests for the Bucket class
│   ├── HashMap.test.js    # Unit tests for the HashMap class
│   └── Node.test.js       # Unit tests for the Node class
├── .gitignore             # Specifies files and directories to be ignored by Git
├── README.md              # Project documentation
├── eslint.config.js       # ESLint configuration for code linting
└── package.json           # Project metadata and dependencies
```

## Customization

You can extend the HashMap implementation by adding new methods or modifying existing ones. The modular structure with separate `Node`, `Bucket`, and `HashMap` classes makes it easy to experiment and enhance functionality.

## Contributing

Contributions, bug reports, and feature suggestions are welcome!

To contribute:

1. **Fork the repository**
2. **Create a feature branch**
3. **Write tests for new functionality**
4. **Ensure all tests pass**
5. **Follow the existing code style**
6. **Submit a pull request**
