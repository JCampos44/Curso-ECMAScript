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