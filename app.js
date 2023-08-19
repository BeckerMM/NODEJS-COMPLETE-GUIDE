
// Importing modules 
// require() é a função usada par aimportar modulos globalmente
const http = require('http');
// este módulo permite trabalharmos com sistemas de arquivos 
const fs = require('fs');

// Creating server
// Res é a resposta que o servidor envia para o cliente e req é a requisição que o cliente envia para o servidor
const server = http.createServer((req, res) => {

    // req.url é a url que o cliente acessou
    const url = req.url;

    // req.method é o método que o cliente usou para acessar a url
    const method = req.method;


    if (url = '/' && method === 'GET') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }


    if (url == '/message' && method === 'POST') {
        const body = [];

        // req.on() é usado para executar uma função quando um evento ocorre
        req.on('data', (chunk) => {

            console.log(chunk);
            body.push(chunk);
        });

        // req.on('end') é usado para executar uma função quando a requisição terminar
         returnreq.on('end', ()=>{

            // Buffer.concat() é usado para concatenar os dados recebidos
            const parsedBody = Buffer.concat(body).toString();

            // parsedBody.split('=') é usado para separar os dados recebidos
            const message = parsedBody.slipt('=')[1];

            // fs.write tem a função de escrever um arquivo
        fs.write('message.txt', message);
          // res.statusCode = 302 é o código de status que o servidor envia para o cliente
          res.statusCode = 302;
          res.setHeader('location', '/')
          return res.end();
        })
        

      
    }
    // process.exit() é usado para parar o servidor
    // process.exit(); códiogo poucamente utilizado, pois quando executado o servidor para de funcionar e não é mais possível acessar a página
});

// Listening to the server
// O servidor fica escutando a porta 3000
server.listen(3000);