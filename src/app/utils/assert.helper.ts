export function assert(condition: boolean, assertMessage = "Assertion failed"): asserts condition {
    if (!condition) {
        throw new Error(assertMessage);
    }
}
