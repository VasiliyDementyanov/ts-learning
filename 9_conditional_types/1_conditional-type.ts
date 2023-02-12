type NullableString = string | null;
// this type removes null from T
type RemoveNull<T> = T extends null ? never : T;

// Or we could create type removes null and undefined
type NonNullable<T> = T extends null | undefined ? never : T;

let firstName: RemoveNull<NullableString>;
// error
//firstName = null;
firstName = 'Bob';

console.log(firstName);
