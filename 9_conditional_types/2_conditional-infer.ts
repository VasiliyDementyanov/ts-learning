function addPerson(personName: string) {
  return {
    type: 'AddPerson',
    payload: personName
  };
}

function removePerson(id: number) {
  return {
    type: 'RemovePerson',
    payload: id
  };
}

// infer helps us to get type from return value of function
type FunctionReturnType<T> = T extends (...args: any) => infer R ? R : T;

type AddPersonType = typeof addPerson;
type RemovePersonType = typeof removePerson;

type Actions = FunctionReturnType<AddPersonType> | FunctionReturnType<RemovePersonType>;

const person = { name: 'Fred' };
type PersonType = FunctionReturnType<typeof person>;

// accept only function, the result is function return type
type FunctionReturnType2<T extends (...args: any) => any> = T extends (...args: any) => infer R
  ? R
  : T;

// standart ts library type
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
