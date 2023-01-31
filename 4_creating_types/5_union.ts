type Age = number | null | undefined;
let age: Age = 54;
let age2: Age = null;

type Fruit = "Banana" | "Apple" | "Pear";
let fruit: Fruit = "Apple";

// object union
type Actions = { type: "loading" } | { type: "loaded"; data: { name: string } };
const loadingAction: Actions = { type: "loading" };
