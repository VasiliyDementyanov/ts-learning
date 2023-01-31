type Name = {
    firstName: string;
    lastName: string;
};

type PhoneNumber = {
    landline: string;
    mobile: string;
};

type Email = {
    emailAddress: string;
};

type Contact = Name & PhoneNumber & Email;

const fred: Contact = {
    firstName: "Fred",
    lastName: "Smith",
    landline: "0116 4238978",
    mobile: "079543 4355435",
    emailAddress: "fred.smith@someemail.com",
};

// intersection of common members
// intersection is performed mathematicaly
type TextInput = {
    kind: "text";
};

type BaseElement = {
    name: string;
    kind: "text" | "number" | "email";
};

type Field = TextInput & BaseElement;

const age3: Field = {
    name: "Age",
    kind: "number", // wrong
};

// -----

type A = {
    doIt: (a: string) => void;
};
type B = {
    doIt: (a: string, b: string) => void;
};
type A_and_B = A & B;
// right
const ab_v1: A_and_B = {
    doIt: (a: string) => {},
};
