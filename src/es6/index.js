function newFunction(name, age, country) {
    var name = name || 'javier';
    var age = age || 23;
    var country = country || 'CL';
    console.log(name, age, country);
}

//es6
function newFunction2(name = 'Javier', age = 23, country = 'CL'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 23, 'CO');


//Template literals
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//es6
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);


let lorem = "Que pasa larvaaaa \n"
+ "otra frase.";

//es6
let lorem2 = `Otra frase
ahora es otra frase`;

console.log(lorem);
console.log(lorem2);


let person = {
    'name': 'Javier',
    'age': 23,
    'country': 'CL'
}

console.log(person.name, person.age, person.country);

//es6
let{ name, age, country } = person;
console.log(name, age, country);


//Arreglos
let team1 = ['Javier', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education  = ['David', ...team1, ...team2];

console.log(education);


//Las variables de tipo var son globales 
//y las de tipo let solo son accesibles 
//desde su mismo bloque de código
{
    var globalVar = 'Global Var';
}
{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);

//No se puede modificar el valor de una constante
const a = 'b';
//a = 'a';
console.log(a);