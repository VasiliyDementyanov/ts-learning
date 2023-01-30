function add(a: number, b?: number): number {
    return a + (b || 0);
}

console.log(add(2));
