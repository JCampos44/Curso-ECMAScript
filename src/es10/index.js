let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2));

let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));

//trimStart
let hello = '      Hello World';
console.log(hello);
console.log(hello.trimStart());

//trimEnd
let hello = 'Hello World          ';
console.log(hello);
console.log(hello.trimEnd());

//Optional catch binding
try {
    
} catch {
    error
}


//fromEntries
let entries = [["name", "Javier"], ["age", 23]];
console.log(Object.fromEntries(entries));

//Symbol
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);