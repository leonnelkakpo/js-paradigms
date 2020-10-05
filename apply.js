const person = {
  fullName: function (city, country) {
    return (
      this.firstName + " " + this.lastName + " from " + city + " of " + country
    );
  },
};
const person1 = {
  firstName: "Mary",
  lastName: "Doe",
};
console.log(person.fullName.apply(person1, ["Agla", "Cotonou"]));

console.log(person.fullName.call(person1, "Agla", "Cotonou"));
