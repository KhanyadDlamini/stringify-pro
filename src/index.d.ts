export interface SafeStringifyOptions {
    replacer?: ((key: string, value: any) => any) | null;
    space?: number;
    circularPlaceholder?: string;
    maxDepth?: number;
    maxArrayLength?: number;
}

export declare function safeStringify(obj: any, options?: SafeStringifyOptions): string;
