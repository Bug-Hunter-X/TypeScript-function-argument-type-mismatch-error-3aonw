function greeter(person: string | string[]) {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(', ');
  }
}

let user = ["Jane User", "John User"];

console.log(greeter(user)); //Output: Hello, Jane User, John User
console.log(greeter("Jane User")); //Output: Hello, Jane User