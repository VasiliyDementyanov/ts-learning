type ContactDetails = { [K in 'name' | 'email']: string };

// so the type is
// {
//   name: string;
//   email: string;
// }

// example
type MappedTypeName = {
  [K in keyof ExistingType1]: ExistingType2;
};

// example
interface Form<T> {
  values: T;
  // make properties optional
  errors: { [K in keyof T]?: string };
}

const contactForm: Form<{ name: string; email: string; mobile: string }> = {
  values: {
    name: 'Bob',
    email: 'bob@someemail.com',
    mobile: '0745 6723432'
  },
  errors: {
    email: 'Invalid email address',
    mobile: 'You must add a mobile number'
  }
};
console.log(contactForm);
