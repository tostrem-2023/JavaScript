// Cannot be executed in node - must use browser because node doesn't support XMLHTTPRequest
const xhr = new XMLHttpRequest();

// Ajax (Asynchronous JavaScript and XML)
xhr.onload = function() {   // .onload executes when any response rec'd from server
    console.log(xhr.responseText)
};

xhr.open( 'GET', 'https://jsonplaceholder.typicode.com/todos/1' );

xhr.send();