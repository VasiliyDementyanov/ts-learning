// but it readonly not in runtime
// js allows you to change the values

type Person = {
  name: string;
  readonly age: number;
};

const bob: Person = {
  name: 'Bob',
  age: 30
};

// interface

interface Animal {
  name: string;
  readonly age: number;
}

const barry: Animal = {
  name: 'Barry',
  age: 4
};

// class

class Vehicle {
  constructor(public name: string, public readonly topSpeed: number) {}
}

const mini = new Vehicle('Mini', 120);
