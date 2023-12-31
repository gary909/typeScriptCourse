// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore1;
highScore1 = 1;
highScore1 = false;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var stuff1 = [];
// Create an array called colors that can hold a mixture of RGB and HSL color types
var colours1 = [];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
// function greet1 (name: string | string[]){
//     for (let i = 0; i < name.length;i++){
//         console.log("Hello, " + name);
//     }
// }
var greet1 = function (person) {
    if (typeof person === "string") {
        console.log("Hello, ".concat(person));
    }
    else {
        for (var _i = 0, person_1 = person; _i < person_1.length; _i++) {
            var p = person_1[_i];
            console.log("Hello, ".concat(p));
        }
    }
};
greet1("Tom");
greet1(["Tom", "Jim", "Dan"]);
