interface Person {
  firstName: string;
  surname: string;
}
interface Organisation {
  name: string;
}
type Contact = Person | Organisation;

function assertIsPerson(contact: Contact): asserts contact is Person {
  if ((contact as Person).firstName === undefined) {
    throw new Error('Not a person');
  }
}

function assertIsOrganisation(contact: Contact): asserts contact is Organisation {
  if ((contact as Organisation).name === undefined) {
    throw new Error('Not an organisation');
  }
}

function sayHello(contact: Contact) {
  assertIsPerson(contact);
  console.log('Hello ' + contact.firstName);
}

const bob: Person = {
  firstName: 'Bob',
  surname: 'Young'
};

const redBricks: Organisation = {
  name: 'Red Bricks'
};

sayHello(bob);
sayHello(redBricks);
