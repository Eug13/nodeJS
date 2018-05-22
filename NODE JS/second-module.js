let x = 10;

function hello(){
    console.log("welcome to node second-module !");
}

module.exports = {
    value:x,
    getHello : hello
}