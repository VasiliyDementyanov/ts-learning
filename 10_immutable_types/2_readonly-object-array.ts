interface Result {
  name: string;
  readonly scores: readonly number[];
  readonly profile: {
    readonly level: number;
  };
}
let billScores: Result = {
  name: 'Bill',
  scores: [90, 65, 80],
  profile: {
    level: 1
  }
};

console.log(billScores);

// Readonly utility type

interface Result2 {
  name: string;
  scores: number[];
  profile: {
    level: number;
  };
}

// it is shallow readonly
// so you could do push to scores
let billScores2: Readonly<Result2> = {
  name: 'Bill',
  scores: [90, 65, 80],
  profile: {
    level: 1
  }
};
