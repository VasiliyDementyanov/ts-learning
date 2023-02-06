type Form2<T> = {
  errors: { [K in keyof T]?: string };
  values: T;
};
