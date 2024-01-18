//Estos son de chatgpt
//Exercise 1: Create a Person Constructor
//Create a constructor function called Person that takes name and age as parameters
// and assigns them as properties of the object.
function Person (name, age){
    this.name = name;
    this.age = age;
}


//Exercise 2: Add a Method
//Extend the Person constructor to include a method called greet that prints a greeting message 
//to the console, like "Hello, my name is [name] and I am [age] years old."


//!--------- Esto me da function anonymous ???
/*function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person2 = new Person("Susi", 34);
console.log(person2);
person2.greet();*/



//Exercise 3: Create Instances
//Create two instances of the Person object using the new keyword and different values for name and age.
let person1 = new Person ("Amanda", 49);
let person2 = new Person ("Jolene", 64)
console.log(person1);
console.log(person2);

//Exercise 4: Create a Product Constructor
//Create a constructor function called Product that takes name, price, and quantity as parameters
// and assigns them as properties of the object.
function Product(name,price,quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}


//Exercise 5: Add a Method
//Extend the Product constructor to include a method called getTotalValue that 
//calculates and returns the total value (price multiplied by quantity) of the product.
function Product1(name,price,quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.getTotalValue = function (){
        let TotalValue = this.price * this.quantity; ;

    }
}
let eggs = new Product1("Eggs", 3.99, 5)//! Esto meda function anonymous
console.log(eggs) 
console.log(eggs.getTotalValue())

//Exercise 6: Create Instances
//Create two instances of the Product object using the new keyword and different values for name, price, and quantity.


//Exercise 7: Create a Book Constructor
//Create a constructor function called Book that takes title, author, and year as 
//parameters and assigns them as properties of the object.


//Exercise 8: Add a Method
//Extend the Book constructor to include a method called getAge that calculates and 
//returns the age of the book (current year minus the year it was published).


//Exercise 9: Create Instances
//Create two instances of the Book object using the new keyword and different values for title, author, and year.



//Exercise 10: Combine Constructors
//Create a new constructor function called Library that takes an array of books and assigns it as a property of the object. 