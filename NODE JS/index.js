let obj = require('./first-module');
let obj2 = require('./second-module');

let json = require('./module.json');


console.log('index.js hello too!');

//WRONG EXAMPLES!!!
// test();

// console.log(global);
// console.log(module);


// console.log(obj.number);
// console.log(obj);
// console.log(obj.a);

//======> good result and json

console.log(obj2.value);
obj2.getHello();


// let name = JSON.parse
let name = json.name;
let surname = json.surname;
let age = json.age;

console.log(name + " " + surname + " " + age);


// console.log(__dirname);

// console.log(__filename);

// console.log(process.execPath);
// console.log(process.platform);

// const  stdin = process.stdin;
// const stdout = process.stdout;

// stdout.write('Hellllllllllo!!!!!\n');

// stdin.on('data',input =>{
//     let name = input.toString();

// stdout.write(`Hello , ${name}`);
// process.exit();
// });


const fs = require('fs');
// const dir = fs.readdirSync(__dirname);

// fs.readFile('module.json', (error,dir) => {
//     if(error){throw error;}
//     console.log(dir.toString());
// })
const b = {"age":"44"};
const a = JSON.stringify(b);

fs.writeFile('text.json',a,(error)=>{
    if(error){
        throw error;
    }
    console.log("done");
})

// fs.appendFile('text.txt',' people !',(error)=>{
//     if(error){
//         throw error;
//     }
//     console.log("done");
// })


// fs.watch(__dirname,(event,filename)=>{
//     console.log(event);
//     console.log(filename);
// })