class Product3 {
  constructor(public name: string, public price: number) {}
}

class Products3 {
  private products: Product3[] = [];

  add(product: Product3) {
    this.products.push(product);
  }

  // overload methods with different signature
  filter(name: string): Product3[];
  filter(name: string, price: number): Product3[];
  filter(name: string, price?: number): Product3[] {
    if (price === undefined) {
      return this.products.filter((product) => product.name === name);
    } else {
      return this.products.filter((product) => product.name === name && product.price === price);
    }
  }
}

const products = new Products3();
products.add(new Product3('Table', 400));
products.add(new Product3('Chair', 100));
products.add(new Product3('Lamp', 30));

console.log(products.filter('Chair', 100));
console.log(products.filter('Chair'));
