//Entries
const data = {
    frontend: 'Javier',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


//Object values
const data = {
    frontend: 'Javier',
    backend: 'Isabel',
    design: 'Ana',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);


//Padding
const string = 'hello';
console.log(string.padStart(7, 'Hi'));
console.log(string.padEnd(12, ' -----'));
console.log('food'.padEnd(12, ' -----'));