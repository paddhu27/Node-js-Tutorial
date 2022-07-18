const http= require('http');
const fs= require('fs');
const _ = require('lodash');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);//request object

    const num = _.random(0, 20);
    console.log(num);
    const greet = _.once(() => {
        console.log('hello');
      });
    greet();
    //sets header content type
    res.setHeader('Content-Type','text/html');

    // res.write('<head><link rel="stylesheet" href="#"></head>');
    // res.write('<p>hello,everyone</p>');
    // res.write('<p>Good evening</p>');
    // res.end();

    //to send multiple html files according to req
    let path= './viewss/';
    switch(req.url){
        case '/':
            path +='index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me'://redirecting to about page
            path += 'about.html';
            res.statusCode = 301;
            res.setHeader('Location','/about');
            break;
        default:
            path += 'error.html';0
            res.statusCode = 404;
            break;
    }

    //to give html file as response we have to use fs again
    fs.readFile(path ,(err,data) =>{
        if(err){
            console/log(err);
            res.end();
        }
        else{
            //res.write(data);
            res.end(data);
            res.statusCode = 200;
        }
    })
});

server.listen(3000,'localhost',()=>{
    console.log('listening for reqests on port 3000');
});