// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
}
	Person.prototype.greet(){
		console.log(`Hello my name is ${this.name}, I am ${this.age} years old.`);
	}

function Employee(name, age, jobTitle) {
	Person.call(this, name, age);
	this.jobTitle = jobTitle;
}
	Employee.prototype = Object.create(Person.prototype);
    Employee.prototype.constructor = Employee;
	 // Employee.prototype = Person;
	Employee.prototype.jobGreet(){
		console.log(`Hello my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`);		
	}


// Do not change code below this line
window.Person = Person(Alice,25);
window.Employee = Employee;
