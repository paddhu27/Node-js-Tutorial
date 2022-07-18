const fs = require('fs');
// const readStream =fs.createReadStream('./docs/blog3.txt');
// readStream.on('data',(chunk) => {
//     console.log('...New Chunk...');
//     console.log(chunk.toString());
// });
const readStream = fs.createReadStream('./docs/blog3.txt' ,{encoding :'utf8'});

const writeStream = fs.createWriteStream('./docs/blog4.txt');
readStream.on('data',(chunk) => {
    console.log('....NEW CHUCNK....');
    
    console.log(chunk);
    console.log(chunk.toString());
    writeStream.write('\n new chunk \n');
    writeStream.write(chunk);
});
//piping

//reading data from readStream then it will be piping into writestreams same as above

//readStream.pipe(WriteStream);


