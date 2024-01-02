export default interface Person {
  firstName: string,
  lastName: string
}

export function sayHello(person: Person): string {
  return `Hello, ${person.firstName}!`;
}
