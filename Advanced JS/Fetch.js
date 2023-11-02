fetch( 'https://jsonplaceholder.typicode.com/todos/1' )
    .then( (response) => response.json())  // returns promise as JS object
    .then( value => console.log(value))
    .catch( (error) => console.log(error.message));  // will go to rejected status if no internet connection

// POST data
const newTodo = {
    "userId": 1, 
    "title": 'delectus aut autem', 
    "completed": false
};

fetch( 'https://jsonplaceholder.typicode.com/todos', 
    {
        method: 'POST',
        body: JSON.stringify( newTodo )
    },
    {
        headers: {
            'Content-Type': 'application/JSON'
        }
    }
)
    .then( response => response.json )
    .then( value => console.log(value));