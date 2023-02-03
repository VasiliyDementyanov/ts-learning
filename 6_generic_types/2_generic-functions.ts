/*
Shorts

T (for "T"ype)
S (for "S"ate)
E (for "E"lement)
K (for "K"ey)
V (for "V"alue)
*/

function firstOrNull<T>(array: T[]): T | null {
  return array.length === 0 ? null : array[0];
}

const first = firstOrNull([1, 2, 3]);
console.log(first);
