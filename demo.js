const { safeStringify } = require('./src');

// Complex object
const obj = {
    name: "Khanya",
    nested: { age: 25 },
    arr: [1, 2, { deep: true }],
    map: new Map([["key1", "value1"], ["key2", { nested: "yes" }]]),
    set: new Set([1, 2, 3]),
    func: function test() { },
    sym: Symbol("id")
};

// Circular reference
obj.self = obj;

console.log(safeStringify(obj, { maxDepth: 3, space: 2 }));
