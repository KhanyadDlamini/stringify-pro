# stringify-pro

A safer, smarter alternative to JSON.stringify — built for real-world apps handling complex nested objects, circular references, Maps, Sets, Functions, Symbols, and more.
Designed to never crash, even when objects get too deep or self-referencing.

## Features

- ✅ Handles circular references automatically (`"[Circular]"`)
- ✅ Stringifies deep objects safely
- ✅ Converts Functions → `[Function: name]`
- ✅ Converts Symbols → `"Symbol(desc)"`
- ✅ Supports Maps, Sets, and Nested Arrays
- ✅ Optional `maxDepth` to prevent runaway structures
- ✅ Pretty-printing with configurable `space`
- ✅ Fail-safe for large, complex, or unpredictable objects

## Installation

```bash
npm install stringify-pro

# or
yarn add stringify-pro
```
## Usage

```javascript
const { safeStringify } = require("khanya-stringify-pro");

const obj = {
  name: "Khanya",
  nested: { age: 25 },
  arr: [1, 2, { deep: true }],
  map: new Map([["key1", "value1"], ["key2", { nested: "yes" }]]),
  set: new Set([1, 2, 3]),
  func: function test() {},
  sym: Symbol("id")
};

// Add circular reference
obj.self = obj;

const json = safeStringify(obj, {
  maxDepth: 3,
  space: 2,
  circularPlaceholder: "[Circular]"
});

console.log(json);

``` 
## Usage

```javascript
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
```

## API Reference
safeStringify(value, options?)
| Option                | Type     | Default        | Description                      |
| --------------------- | -------- | -------------- | -------------------------------- |
| `maxDepth`            | `number` | `Infinity`     | Limits how deep recursion goes   |
| `space`               | `number  | string`        | `0`                              |
| `circularPlaceholder` | `string` | `"[Circular]"` | String to show for circular refs |


## Why Use Khanya Stringify Pro?

`JSON.stringify` fails or breaks when dealing with:

- ❌ Circular references  
- ❌ Functions  
- ❌ Symbols  
- ❌ Maps  
- ❌ Sets  
- ❌ Deeply nested structures  

Khanya Stringify Pro handles **all of these** safely.

Perfect for:

- Debugging complex objects  
- Logging large structures  
- Express & API responses  
- MongoDB logging  
- Serialization utilities  


## License
MIT © Khanyakwezwe Dlamini




