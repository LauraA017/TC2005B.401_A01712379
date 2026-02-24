const express = require('express');
const app = express();

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

//Aqui pegar el codigo de old_labs


app.use('/new', (request, response, next) => {
    response.send('¡Hola mundo desde new!');
    next();
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);

// package.json siempre ver que el nombre se correcto para correrlo en el local host:3000

