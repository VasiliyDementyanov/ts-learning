// function
function doubleScores(scores: readonly number[]) {
  return scores.map((score, i) => score * 2);
}

// object
type PersonScore = {
  name: string;
  score: number;
};

function doubleScore(person: Readonly<PersonScore>) {
  return { ...person, score: person.score * 2 };
}

const bill: PersonScore = {
  name: 'Bill',
  score: 90
};
const doubleBill = doubleScore(bill);
console.log(bill, doubleBill);
