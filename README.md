# stringify-pro

Safely stringify complex nested objects without throwing errors on circular references. Handles Arrays, Maps, Sets, Functions, Symbols, and deeply nested structures.

## Features

- ✅ Circular reference detection (`[Circular]`)
- ✅ Deeply nested objects
- ✅ Arrays, Maps, Sets
- ✅ Functions converted to string `[Function: name]`
- ✅ Symbols converted to string `Symbol(description)`
- ✅ Max depth limit to prevent huge objects
- ✅ Pretty-print JSON with configurable spaces

## Installation

```bash
npm install stringify-pro

# or
yarn add stringify-pro
```
```
## Usage

```javascript
const { safeStringify } = require('stringify-pro');

const obj = {
  name: "Khanya",
  nested: { age: 25 },
  arr: [1, 2, { deep: true }],
  map: new Map([["key1", "value1"], ["key2", { nested: "yes" }]]),
  set: new Set([1, 2, 3]),
  func: function test() {},
  sym: Symbol("id")
};

// Circular reference
obj.self = obj;

const json = safeStringify(obj, {
  maxDepth: 3,        // Optional: max depth
  space: 2,           // Optional: pretty-print spaces
  circularPlaceholder: "[Circular]" // Optional: custom circular string
});

console.log(json);

/* Output:
{
  "name": "Khanya",
  "nested": {
    "age": 25
  },
  "arr": [
    1,
    2,
    {
      "deep": true
    }
  ],
  "map": {
    "key1": "value1",
    "key2": {
      "nested": "yes"
    }
  },
  "set": [
    1,
    2,
    3
  ],
  "func": "[Function: test]",
  "sym": "Symbol(id)",
  "self": "[Circular]"
}
*/
``` 
## API
### `safeStringify(value, options)`
- `value`: The value to stringify (object, array, etc.)
- `options` (optional): Configuration object
  - `maxDepth` (number): Maximum depth to traverse (default: `Infinity`)
  - `space` (number|string): Number of spaces or string for pretty-printing (default: `0`)
  - `circularPlaceholder` (string): Placeholder for circular references (default: `"[Circular]"`)

## License
MIT © Khanyakwezwe




