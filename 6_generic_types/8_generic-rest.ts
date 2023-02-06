type NameAndThings<T extends unknown[]> = [name: string, ...things: T];

let bobScores: NameAndThings<number[]>;
bobScores = ['Bob', 4, 9, 3];

let billGrades: NameAndThings<('A' | 'B' | 'C')[]>;
billGrades = ['Bill', 'A', 'A', 'C'];

// functions
function logThings<T extends unknown[]>(name: string, ...things: T) {
  console.log(things);
}
logThings('Bob', 4, 9, 3);
logThings<number[]>('Bob', 4, '9', 3); // error
