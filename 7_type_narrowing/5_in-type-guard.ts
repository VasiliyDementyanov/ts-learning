interface Person {
  firstName: string;
  surname: string;
}
interface Organisation {
  name: string;
}

type Contact = Person | Organisation;

function sayHello(contact: Contact) {
  if ('firstName' in contact) {
    console.log('Hello ' + contact.firstName);
  }
  if ('name' in contact) {
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
