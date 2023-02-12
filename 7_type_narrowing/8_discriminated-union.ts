interface Person {
  firstName: string;
  surname: string;
  contactType: 'person';
}
interface Organisation {
  name: string;
  contactType: 'organisation';
}
type Contact = Person | Organisation;

function sayHello(contact: Contact) {
  switch (contact.contactType) {
    case 'person':
      console.log('Hello ' + contact.firstName);
      break;
    case 'organisation':
      console.log('Hello ' + contact.name);
      break;
  }
}

const bob: Person = {
  firstName: 'Bob',
  surname: 'Young',
  contactType: 'person'
};

const redBricks: Organisation = {
  name: 'Red Bricks',
  contactType: 'organisation'
};

sayHello(bob);
sayHello(redBricks);
