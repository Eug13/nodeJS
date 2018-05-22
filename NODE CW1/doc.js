//Docs

const command = process.argv[2];
switch (command) {
    case '-js':
       js();
        break;
    case '-jq':
        jquery();
        break;
    case '-r':
        react();
        break;
    case '-a':
        angular();
        break;
    case '-n':
        node();
        break;  
    case '-s':
        sleep();
        break;   

    default:
        help();
        break;
}

function js(){
    const exec = require("child_process").exec;
    let js = ("start https://learn.javascript.ru/");
    exec(js);
}

function jquery(){
    const exec = require("child_process").exec;
    let jq = ("start http://api.jquery.com/");
    exec(jq);
}

function react(){
    const exec = require("child_process").exec;
    let react = ("start https://reactjs.org/docs/hello-world.html");
    exec(react);
}

function angular(){
    const exec = require("child_process").exec;
    let ang = ("start https://docs.angularjs.org/api");
    exec(ang);
}

function node(){
    const exec = require("child_process").exec;
    let node = ("start https://nodejs.org/dist/latest-v8.x/docs/api/");
    exec(node);
}

function sleep(){
    const exec = require("child_process").exec;
    let sleep = "start shutdown /p";
    exec(sleep);
}

function help(){
console.log(`<====================APP MANUAL!====================>`);
console.log(`for read [JS] documentation use flag              -js`);
console.log(`for read [Jquery] documentation use flag          -jq`);
console.log(`for read [React JS] documentation use flag         -r`);
console.log(`for read [Angular JS] documentation use flag       -a`);
console.log(`for read [Node JS] documentation use flag          -n`);
console.log(`for shutdown your computer use flag                -s`);
console.log(`<===================================================>`);
}



