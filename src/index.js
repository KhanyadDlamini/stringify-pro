function safeStringify(obj, options = {}) {
    const {
        replacer = null,
        space = 2,
        circularPlaceholder = "[Circular]",
        maxDepth = Infinity
    } = options;

    const seen = new WeakSet();

    function _stringify(value, depth = 0) {
        if (depth > maxDepth) return "[Max Depth Reached]";

        if (typeof value === "function") return `[Function: ${value.name || "anonymous"}]`;
        if (typeof value === "symbol") return value.toString();

        if (value && typeof value === "object") {
            if (seen.has(value)) return circularPlaceholder;
            seen.add(value);

            if (Array.isArray(value)) {
                return value.map(v => _stringify(v, depth + 1));
            }

            if (value instanceof Map) {
                const objMap = {};
                for (const [k, v] of value.entries()) {
                    objMap[k] = _stringify(v, depth + 1);
                }
                return objMap;
            }

            if (value instanceof Set) {
                return Array.from(value).map(v => _stringify(v, depth + 1));
            }

            const newObj = {};
            for (const key in value) {
                if (Object.hasOwnProperty.call(value, key)) {
                    newObj[key] = _stringify(value[key], depth + 1);
                }
            }
            return newObj;
        }

        return value;
    }

    return JSON.stringify(_stringify(obj), replacer, space);
}

module.exports = { safeStringify };
