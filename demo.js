const { safeStringify } = require("./src");

// Create a complex test object
const obj = {
    name: "Khanya",
    nested: { age: 19 },
    arr: [1, 2, { deep: true }],
    map: new Map([
        ["key1", "value1"],
        ["key2", { nested: "yes" }]
    ]),
    set: new Set([1, 2, 3]),
    func: function test() { },
    sym: Symbol("id")
};

// Create a circular reference
obj.self = obj;

console.log(
    safeStringify(obj, {
        maxDepth: 3,
        space: 2,
    })
);
