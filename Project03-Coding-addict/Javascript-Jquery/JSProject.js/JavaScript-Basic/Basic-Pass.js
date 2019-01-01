// Prototype

function Student(name, lastName, role, school) {
    this.name = name;
    this.lastName = lastName;
    this.role = role;

}
Student.prototype.school = "Crystal Grove High School";
Student.prototype.greet = function() {
    console.log(
        `Hello I'm ${this.name} ${this.lastName} and I'm ${this.role} in the ${this.school}`
    );

};
const john = new Student(
    "john",
    "conor",
    "student"

);

// const bob = new Student(
//     "bob",
//     "jordan",
//     "student"

// );

const bob = {};
//console.log(john.constructor.prototype);

console.log(bob.constructor);

console.log(Object.getPrototypeOf(bob));

console.log(Object.getPrototypeOf(john));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(john)));



// console.log(john);
// console.log(bob);
// john.greet();
// bob.greet();