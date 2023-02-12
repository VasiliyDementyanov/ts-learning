interface Person {
  firstName: string;
  surname: string;
}
interface Organisation {
  name: string;
}

type Contact = Person | Organisation;

// more common way to use
function isPerson(contact: Contact): contact is Person {
  return (contact as Person).firstName !== undefined;
}
function isOrganisation(contact: Contact): contact is Organisation {
  return (contact as Organisation).name !== undefined;
}

function sayHello(contact: Contact) {
  if (isPerson(contact)) {
    console.log('Hello ' + contact.firstName);
  }
  if (isOrganisation(contact)) {
    console.log('Hello ' + contact.name);
  }
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
