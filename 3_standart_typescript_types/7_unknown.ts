// Type checking does occur on the unknown type, unlike with the any type.
function add(a: unknown, b: unknown) {
    // type guard
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return 0;
}

type Person = {
    id: string;
    name: string;
};

// type predicate function
function isPerson(person: any): person is Person {
    return "id" in person && "name" in person;
}
