// Num function
function square1 (num: number){
    return num * num;
}
square(3);


// String Function
function greet3(person : string) {
    return 'Hi there, ${person}';
}
greet("Tom");


// Arrow Function wwith 3 auguments
const doSomething1 = (person: string, age: number, isFunny: boolean) => {};
doSomething("Chikenface", 12, true); // has to be in same order as above


// String Function with inline augument
function greet2(person : string = "stranger") {
    return 'Hi there, ${person}';
}
greet2();