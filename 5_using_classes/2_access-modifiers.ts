class Product2 {
  private name: string;
  private price: number;
  readonly description: string;

  // or write this way
  // constructor(private name: string, private price: number) {}
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

const table2 = new Product2('Table1', 300);
