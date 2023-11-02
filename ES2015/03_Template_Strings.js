const name = "John", message = "Good morning";
// const greeting = message + " " + name + "!";
// console.log (greeting);

const greeting = `${message} 

${name}!`;
console.log (greeting);

const john = {
    name: 'John',
    email: 'john@gmail.com',
    age: 32
};

// tedious example:
// const strTr = '<tr>' + 
//     '<td>' + john.name + '</td>' +
//     '<td>' + john.email + '</td>' +
//     '<td>' + john.age + '</td>' +
//     '</tr>';
// console.log (strTr);

// easier to construct in string - more similar to writing basic html
const strTr = `
    <tr>
        <td>${john.name}</td>
        <td>${john.email}</td>
        <td>${john.age}</td>
        </tr>
    `
    console.log (strTr);