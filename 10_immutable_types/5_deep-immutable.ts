// as const makes all object properties deeply readonly
const bill = {
  name: 'Bill',
  profile: {
    level: 1
  },
  scores: [90, 65, 80]
} as const;

// deep freeze function
function deepFreeze<T>(obj: T) {
  var propNames = Object.getOwnPropertyNames(obj);
  for (let name of propNames) {
    let value = (obj as any)[name];
    if (value && typeof value === 'object') {
      deepFreeze(value);
    }
  }
  return Object.freeze(obj);
}

const bill = deepFreeze({
  name: 'Bill',
  profile: {
    level: 1
  },
  scores: [90, 65, 80]
} as const);

// Creating a DeepImmutable type
type Person = {
  name: string;
  profile: {
    level: number;
  };
  scores: number[];
};

type Immutable<T> = {
  readonly [K in keyof T]: Immutable<T[K]>;
};

const bill: Immutable<Person> = deepFreeze({
  name: 'Bill',
  profile: {
    level: 1
  },
  scores: [90, 65, 80]
});
