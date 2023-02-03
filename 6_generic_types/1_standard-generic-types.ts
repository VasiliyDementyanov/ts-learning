type Coordinate = [number, number];
let coordinates: Array<Coordinate>;
coordinates = [
  [30, 100],
  [100, 50]
];

// promise
const promisedResponse: Promise<Response> = fetch('https://swapi.dev/api/');
promisedResponse.then((res) => console.log(res.ok));

// Record<K,V>
type Result = {
  firstName: string;
  surname: string;
  score: number;
};
type ResultRecord = Record<string, Result>;
// or we could restrict first type of generic
//type ResultRecord = Record<"rodj" | "janes" | "fredp",Result>;
const records: ResultRecord = {
  rodj: {
    firstName: 'Rod',
    surname: 'James',
    score: 70
  },
  janes: {
    firstName: 'Jane',
    surname: 'Smith',
    score: 95
  },
  fredp: {
    firstName: 'Fred',
    surname: 'Peters',
    score: 60
  }
};
console.log(records);
