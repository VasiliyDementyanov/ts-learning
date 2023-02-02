class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  copy(name: string) {
    const copiedProduct = new Product(name, this.price);
    return copiedProduct;
  }

  static equal(product1: Product, product2: Product) {
    return product1.name === product2.name && product1.price === product2.price;
  }
}

const table1 = new Product('Table1', 300);
