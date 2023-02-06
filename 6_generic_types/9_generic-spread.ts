function merge(names: string[], scores: number[]) {
  return [...names, ...scores];
}

// result type is (string | number)[]
let scores = merge(['Bill', 'Jane'], [8, 9]);

function merge2<Names extends string[], Scores extends number[]>(
  names: [...Names],
  scores: [...Scores]
): [...Names, ...Scores] {
  return [...names, ...scores];
}

// result type is ['Bill', 'Jane', 8, 9]
let scores2 = merge(['Bill', 'Jane'], [8, 9]);
