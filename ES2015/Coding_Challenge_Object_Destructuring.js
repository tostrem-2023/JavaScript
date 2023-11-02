function displayName ({first, last}) {
    console.log(`${first} ${last}`)
};

const person = {
    first: 'Virat',
    last: 'Kohli',
    twitter: '@kohli',
    company: 'Cricketer'
};

displayName(person);

// const count = [1, 2, 3, 4, 5]
// const [first, second, ...allAfter, last] = count;  // will throw error because rest operator must be last element
// console.log (last);