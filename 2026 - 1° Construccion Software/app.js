console.log("Hola desde node.js");

const filesystem = require("fs");

filesystem.writeFileSync('hola.txt', 'Hola desde node.js');
const areglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

setTimeout(() => {
    console.log("jojo te hackie");
}, 15000);
    
    
    for(let item of areglo){
    setTimeout(() => {
        console.log(item)
    }, item);
}

//const html= '

const hhtp = require('http');

const serve = hhtp.createServer((request, response) => {
//    console.log(response);
    console.log(request.url);

    response.write("");
    response.end();
    

});

server.listen(3000);

