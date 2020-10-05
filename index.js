const util = require("util");

const Person = function (a_firstname, a_lastname) {
  this.lastname = a_lastname;
  this.firstname = a_firstname;

  this.present = function () {
    return `i'm ${this.firstname} ${this.lastname}`;
  };
};

Person.prototype.read = function () {
  return `prototype i'm ${this.firstname} ${this.lastname}`;
};

Person.prototype.class = "Moyenne";

const person = new Person("john", "doe");

Person.prototype.read = function () {
  return `prototype i'm ${this.lastname} ${this.firstname}`;
};

Person.prototype.class = "Supérieure";

const person2 = new Person("john", "doe");

const person2_bind = person2.read.bind({
  firstname: "Aya",
  lastname: "Nakamura",
});

console.log(person2_bind());

// console.log(
//   util.inspect(person.toString(), {
//     showHidden: true,
//     depth: null,
//     colors: true,
//   })
// );
