function safeStringify(obj, options = {}) {
    const {
        replacer = null,
        space = 2,
        circularPlaceholder = "[Circular]",
        maxDepth = Infinity,
        maxArrayLength = Infinity
    } = options;

    const seen = new WeakSet();

    function _stringify(value, depth = 0) {
        if (depth > maxDepth) return "[Max Depth Reached]";

        const type = typeof value;

        // Primitive types
        if (value === null || type === "number" || type === "boolean" || type === "string")
            return value;

        if (type === "function")
            return `[Function: ${value.name || "anonymous"}]`;

        if (type === "symbol")
            return value.toString();

        // Objects
        if (type === "object") {
            if (seen.has(value)) return circularPlaceholder;
            seen.add(value);

            // Arrays
            if (Array.isArray(value)) {
                const arr = value.slice(0, maxArrayLength);
                return arr.map((v) => _stringify(v, depth + 1));
            }

            // Maps
            if (value instanceof Map) {
                const mapObj = {};
                for (const [k, v] of value.entries()) {
                    mapObj[k] = _stringify(v, depth + 1);
                }
                return mapObj;
            }

            // Sets
            if (value instanceof Set) {
                return Array.from(value).map(v => _stringify(v, depth + 1));
            }

            // Regular objects
            const result = {};
            for (const key of Object.keys(value)) {
                try {
                    result[key] = _stringify(value[key], depth + 1);
                } catch (err) {
                    result[key] = `[Error: ${err.message}]`;
                }
            }
            return result;
        }

        return value;
    }

    try {
        return JSON.stringify(_stringify(obj), replacer, space);
    } catch (err) {
        return `{"error": "Failed to stringify object: ${err.message}"}`;
    }
}

module.exports = { safeStringify };
