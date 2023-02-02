// we could asign type to interface cause their structure and fields are the same
type TPerson5 = {
  name: string;
};
interface IPerson5 {
  name: string;
}

let bob5: TPerson5 = {
  name: 'Bob'
};
let fred5: IPerson5 = {
  name: 'Fred'
};

bob5 = fred5;

// functions
// is ok cause types are the same
let add2 = (a: number, b: number): number => a + b;
let sum2 = (x: number, y: number): number => x + y;
sum2 = add2;

// is ok because c is optional
let add3 = (a: number, b: number, c?: number): number => a + b + (c || 0);
let sum3 = (x: number, y: number): number => x + y;
sum3 = add3;

// is ok because 3 vars fits 2
let add4 = (a: number, b: number, c: number): number => a + b + c;
let sum4 = (x: number, y: number): number => x + y;
add4 = sum4;
