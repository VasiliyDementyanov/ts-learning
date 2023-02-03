interface Form<T> {
  values: T;
  errors: {
    [K in keyof T]?: string;
  };
}

interface Contact {
  name: string;
  email: string;
}

const contactForm: Form<Contact> = {
  values: {
    name: 'Bob',
    email: 'bob@someemail.com'
  },
  errors: {
    name: 'This must be a valid name',
    email: 'This must be a valid email address'
  }
};
