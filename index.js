/* const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url == '/'){
        res.write('hello nodejs home');
        res.end();
    }
    if(req.url == '/test'){
        res.end('hello nodejs test');
        
    }
    
});

app.get('/')


server.listen(3000,()=>{
    console.log('listerning.......');
}); */

const express = require('express');
const app = express();

app.get('/:name', (req,res)=>{
    res.send('hello world'+ req.params.name);
});

app.listen(3000,()=>{
    console.log('fgsgfgdgd ......');
})