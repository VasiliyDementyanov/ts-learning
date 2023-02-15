const person = {
  name: 'Fred',
  age: 30,
  email: 'fred@somewhere.com'
};

// we could exclude property from type
type RemoveFromUnion<T, K> = T extends K ? never : T;
// so the type has no age property now
type ContactKeys = RemoveFromUnion<keyof typeof person, 'age'>;
// same
type ContactKeys2 = Exclude<keyof typeof person, 'age'>;

console.log(person);

// *** //
// creating type with certain keys
type ObjectWithKeys<T, K extends keyof T> = {
  [P in K]: T[P];
};

// so the type has name and email properties
type Contact = ObjectWithKeys<typeof person, 'name' | 'email'>;
// same
type Contact2 = Pick<typeof person, 'name' | 'email'>;

// *** //
// creating type without certain keys
type ObjectWithoutKeys<T, K extends keyof T> = ObjectWithKeys<T, RemoveFromUnion<keyof T, K>>;
type Profile = ObjectWithoutKeys<typeof person, 'name' | 'email'>;
// same
type Profile2 = Omit<typeof person, 'name' | 'email'>;
