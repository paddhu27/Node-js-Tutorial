const fs = require('fs')
//reading files
// fs.readFile('./docs/blog1.txt',(err,data)=>
// {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
//     console.log('1.the file readed')
// });console.log('last line');//this will be displayed first before readFile data


//writing files

// fs.writeFile('./docs/blog1.txt','hi! this is paddu..',() =>{
//     console.log('data written into  existed file');   
// });
// fs.writeFile('./docs/blognew.txt','hello everyone!',() =>
// {
//     console.log('data was written into new file');   
// });

//directories

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder created');
    })
}
else{
    fs.rmdir('./assets' , (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    });
}
//deleting files


if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) =>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}
else{
    console.log('file not extsts');
}