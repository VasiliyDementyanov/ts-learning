class Contact {
  constructor(public emailAddress: string) {}
}
class Person extends Contact {
  constructor(public firstName: string, public surname: string, emailAddress: string) {
    super(emailAddress);
  }
}
class Organisation extends Contact {
  constructor(public name: string, emailAddress: string) {
    super(emailAddress);
  }
}

// instance of works only for classes
function sayHello(contact: Contact) {
  if (contact instanceof Person) {
    console.log('Hello ' + contact.firstName);
  }
  if (contact instanceof Organisation) {
    console.log('Hello ' + contact.name);
  }
}

const bob = new Person('Bob', 'Young', 'bob.young@somewhere.com');
const redBricks = new Organisation('Red Bricks', 'info.redbricks@somewhere.com');

sayHello(bob);
sayHello(redBricks);
