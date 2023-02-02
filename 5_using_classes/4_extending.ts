class Product4 {
  constructor(public name: string, public price: number) {}
}

class Table extends Product4 {
  constructor(public name: string, public price: number, public legs: number) {
    super(name, price);
  }

  log() {
    console.log(this.name, this.price, this.legs);
  }
}

const table = new Table('Table', 400, 4);
table.log();

// abstract class is a class you could only extend not create by calling new
abstract class Animal {
  constructor(public name: string) {}
  protected log(message: string) {
    console.log(message);
  }
}
class Dog extends Animal {
  bark() {
    this.log(this.name + ' Bark');
  }
}
const dog = new Dog('Fudge');
dog.bark();
