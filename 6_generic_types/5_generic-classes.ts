class List<T> {
  private items: T[] = [];
  add(item: T) {
    this.items.push(item);
  }
}

const numberList = new List<number>();
numberList.add(1);
