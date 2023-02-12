function double(item: string | number) {
  if (typeof item === 'string') {
    return item.concat(item);
  } else {
    return item + item;
  }
}
