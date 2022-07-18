//console.log(global);
setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);// without this set interval run for infinite times
}, 3000);

const int = setInterval(() => {
    console.log('in the interval');
}, 1000);

console.log(__dirname);//it gives current directory name
console.log(__filename);//it will give file name