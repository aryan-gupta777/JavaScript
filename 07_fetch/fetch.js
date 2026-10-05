// fetch = Function used for making HTTP requests to fetch resources.
//              (JSON style data, images, files)
//              Simplifies asynchronous data fetching in JavaScript and
//              used for interacting with APIs to retrieve and send
//              data asynchronously over the web.
//              fetch(url, {options})

/*
HTTP response status codes

HTTP response status codes indicate whether a specific HTTP
request has been successfully completed. Responses are grouped in
five classes:

1. Informational responses ( 100 - 199)

2. Successful responses ( 200 - 299)

3. Redirection messages (300 - 399)

4. Client error responses (400 - 499) 

5. Server error responses (500 - 599 )

*/


fetch(" https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response => {
    if(!response.ok){
        throw new Error("Could not fetch resource")
    }
    return response.json();
})
.then(data => console.log(data))
.catch(error => console.log(error))







