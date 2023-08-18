
// Importing modules 
// require() é a função usada par aimportar modulos globalmente
const http = require('http');
// este módulo permite trabalharmos com sistemas de arquivos 
const fs = require('fs');

// Creating server
// Res é a resposta que o servidor envia para o cliente e req é a requisição que o cliente envia para o servidor
const server = http.createServer((req,res) =>{

// req.url é a url que o cliente acessou
const url = req.url;

// req.method é o método que o cliente usou para acessar a url
const method = req.method;


if(url= '/' && method === 'GET'){
res.write('<html>');
res.write('<head><title>Enter Message</title></head>');
res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
res.write('</html>');
return res.end();
}


if(url == '/message' && method === 'POST')
// process.exit() é usado para parar o servidor
// process.exit(); códiogo poucamente utilizado, pois quando executado o servidor para de funcionar e não é mais possível acessar a página
});

// Listening to the server
// O servidor fica escutando a porta 3000
server.listen(3000);