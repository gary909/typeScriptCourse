// Num function
function square (num: number){
    return num * num;
}
square(3);


// String Function
function greet(person : string) {
    return 'Hi there, ${person}';
}
greet("Tom");


// Arrow Function wwith 3 auguments
const doSomething = (person: string, age: number, isFunny: boolean) => {};
doSomething("Chikenface", 12, true); // has to be in same order as above