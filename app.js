
// Importing modules 
// require() é a função usada par aimportar modulos globalmente
const http = require('http');


// Creating server
// Res é a resposta que o servidor envia para o cliente e req é a requisição que o cliente envia para o servidor
const server = http.createServer((req,res) =>{
console.log(req);
// process.exit() é usado para parar o servidor
// process.exit(); códiogo poucamente utilizado, pois quando executado o servidor para de funcionar e não é mais possível acessar a página
});

// Listening to the server
// O servidor fica escutando a porta 3000
server.listen(3000);