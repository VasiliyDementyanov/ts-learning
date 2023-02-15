// so array is immutable at runtime
let billScores = Object.freeze([90, 65, 80]);

// so object is immutable at runtime
// Object.freeze performs a shallow freeze on an object.
// so you could do push to scores
let bill = Object.freeze({
  name: 'Bill',
  age: 30,
  scores: [90, 65, 80],
  profile: {
    level: 1
  }
});
