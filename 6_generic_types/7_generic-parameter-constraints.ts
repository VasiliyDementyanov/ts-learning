interface Logable {
  log: () => void;
}

function logItems<T extends Logable>(items: T[]): void {
  items.forEach((item) => item.log());
}

const heading = {
  name: 'Heading',
  props: { text: 'Chapter 1' },
  log: () => console.log('Chapter 1 heading')
};

const button2 = {
  name: 'Button',
  props: { text: 'Save' },
  trace: () => console.log('Save button'),
  log: () => console.log('Save button')
};

logItems([heading, button]);

// complex example

interface Form<T> {
  values: T;
}

function getFieldValue<T, K extends keyof T>(form: Form<T>, fieldName: K) {
  return form.values[fieldName];
}

const contactForm2 = {
  values: {
    name: 'Bob',
    email: 'bob@someemail.com'
  }
};
console.log(getFieldValue(contactForm, 'name'));
console.log(getFieldValue(contactForm, 'phone')); // error

function logName<T extends { name: string }>(object: T) {
  console.log('My name is ' + object.name);
}
