// representing different types via type and interface
// primitive types (interface can't)
type Name2 = string;

// arrays
type Names3 = string[];
interface Names {
  [index: number]: string;
}

// tuples (interface can't)
type Point = [number, number];

// union (interface can't)
type Status = 'pending' | 'working' | 'complete';

// objects
type Person2 = {
  name: string;
  score: number;
};

interface Person {
  name: string;
  score: number;
}

// composing
type TName3 = {
  firstName: string;
  lastName: string;
};
type TPhoneNumber3 = {
  landline: string;
  mobile: string;
};
type TContact3 = TName3 & TPhoneNumber3;

interface IName {
  firstName: string;
  lastName: string;
}
interface IPhoneNumber {
  landline: string;
  mobile: string;
}
interface IContact extends IName, IPhoneNumber {}

// ---- t & i
type TName4 = {
  firstName: string;
  lastName: string;
};
interface TPhoneNumber4 {
  landline: string;
  mobile: string;
}
type TContact = TName4 & TPhoneNumber4;

// ----
type TStringActions = { type: 'loading' } | { type: 'loaded'; data: string[] };
type TNumberActions = { type: 'loading' } | { type: 'loaded'; data: number[] };
type TActions = TStringActions & TNumberActions;

// declaration merging
interface IButtonProps {
  text: string;
  onClick: () => void;
}
interface IButtonProps {
  id: string;
}
