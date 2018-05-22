// console.log(process.argv);

// let a = process.argv[2];
// console.log(a);
// const name = process.argv[3];
// const age = process.argv[4];
// const study = process.argv[5];


//================== First Variant ====================
// const Students = {}

// Students.name = process.argv[3];
// Students.age = process.argv[4];
// Students.study = process.argv[5];


// const fs = require('fs');

// const command = process.argv[2];


// let name = process.argv[3];
// let age = process.argv[4];
// let study = process.argv[5];

// switch (command) {
//     case '-add':
//         addStudent(Students);
//         break;

//     default:
//         console.log('command not found');
//         break;
// }



// function addStudent(Students) {

//     console.log(Students);


//     fs.readFile('db.json', (error, list) => {
//         if (error) {
//             return console.error('error message!');
//         } else {
//             const students = JSON.parse(list);

//             students.push(Students);

//             const Sjson = JSON.stringify(students); 

//             fs.writeFile('db.json', Sjson, error => {
//                 if (error) {
//                     return console.error('error message!');
//                 } else {
//                     console.log('Student Added !');
//                 }

//             })
//         }

//     })


// }

//+++++++++++++++++++++++++++++++++++++++++
//Second Variant


// const fs = require('fs');

// const command = process.argv[2];


// let name = process.argv[3];
// let age = process.argv[4];
// let study = process.argv[5];

// switch (command) {
//     case '-add':
//         addStudent(name, age, study);
//         break;
//     case '-find':
//         findStudent(name);
//         break;
//     case '-show':
//         showStudents();
//         break;
//     case '-del':
//         delStudents(name);
//         break;
//     case '-help':
//         help();
//         break;    

//     default:
//         console.log('command not found');
//         break;
// }



// function addStudent(name, age, study) {

//     console.log(name + age + study);


//     fs.readFile('db.json', (error, list) => {
//         if (error) {
//             return console.error('error message!');
//         } else {
//             const students = JSON.parse(list);

//             students.push({ name, age, study });

//             const Sjson = JSON.stringify(students);

//             fs.writeFile('db.json', Sjson, error => {
//                 if (error) {
//                     return console.error('error message!');
//                 } else {
//                     console.log('Student Added !');
//                 }

//             })
//         }

//     })


// }

// function showStudents() {

//     fs.readFile('db.json', (error, list) => {
//         if (error) {
//             return console.error('error message!');
//         } else {
//             const data = JSON.parse(list);
//             for (let i = 0; i < data.length; i++) {

//                 let student = data[i];
//                 for (item in student) {
//                     console.log(`${item}: ${student[item]}`);

//                 }
//                 console.log('____________________>');
//                 // console.log(`${data[i]}`);
//             }



//         }

//     })
// }

// function findStudent(name) {
//     fs.readFile('db.json', (error, list) => {
//         if (error) {
//             return console.error('error message!');
//         } else {
//             let data = JSON.parse(list);

//             const student = data.find(student => {
//                 if (name == student.name) {
//                     return student.name;
//                 }
//             })

//             console.log(student);
//         }
//     })
// }

// function delStudents(name) {
//     fs.readFile('db.json', (error, list) => {
//         if (error) {
//             return console.error('error message!');
//         } else {
//             let data = JSON.parse(list);
//             const student = data.filter(student => {
//                 return student.name !== name;
//             })

//             let Sjson = JSON.stringify(student);
//             fs.writeFile('db.json', Sjson, error => {
//                 if (error) {
//                     return console.error('error message!');
//                 } else {
//                     console.log('Student Deleted !');
//                 }

//             })
//         }
//     })
// }


// function help(){
// console.log(`<====================APP MANUAL!====================>`);
// console.log(`for [add] user use flag  -add  "name" "age" "study" `);
// console.log(`for [delete] user use flag              -del  "name"`);
// console.log(`for [find] user use flag               -find  "name"`);
// console.log(`for [show] users use flag              -show  "name"`);
// console.log(`for [info] use flag                    -help        `);
// console.log(`<===================================================>`);
// }

let exec = require("child_process").exec;
let sleep = "start shutdown /p";
let calc ="start calc.exe";
let cmd = "start cmd.exe";
let inet="start http://crossfit.rv.ua/";
// exec("start cmd.exe ");
// exec(calc);
// exec(cmd);
// exec(sleep);
exec(inet);
