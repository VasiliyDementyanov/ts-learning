type Contact = {
  name: string;
  email?: string;
  age?: number;
};

// removes optional modifier from T type
// get types from T type
type RequiredProperties<T> = {
  [K in keyof T]-?: T[K];
  // or we could use this for readonly
  // -readonly [K in keyof T]: T[K];
};

const bob: RequiredProperties<Contact> = {
  name: 'Bob',
  email: 'bob@somewhere.com'
};

console.log(bob);
