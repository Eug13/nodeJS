//http://www.omdbapi.com/?s=star+wars&apikey=cc7bde1b



// const fs = require('fs');
// const dir = fs.readdirSync(__dirname);

// fs.readFile('module.json', (error,dir) => {
//     if(error){throw error;}
//     console.log(dir.toString());
// })



let posterBox = document.querySelector('#poster');
let page = 1;


let btn = document.getElementById('btn');
btn.addEventListener('click', function () {

    let count = document.getElementById('count');
    count.innerText = page;
    posterBox.innerHTML = "";

    let field = document.getElementById('search');
    // field.addEventListener('click',function(){
    //     let page = 1;
      
    // })
    let search = field.value;
    // let page = page;
    if (page >= 1) {
        let paginator = document.getElementById('pagination');
        paginator.style.display = "inline-block";
    }

    // console.log(page + " her");
    addURl(search, page);
    return search;
})


let load = document.getElementById('load');
load.addEventListener('click', function () {
    page++;
    let paginator = document.getElementById('pagination');
    paginator.style.display = "inline-block";
    let count = document.getElementById('count');
    count.innerText = page;
    let address = search.value;
    clearPostBox();

    addURl(address, page);

    // console.log(page);
    // console.log(addURl());
})

let prev = document.getElementById('prev');
prev.addEventListener('click', function () {
    page--;
    if (page <= 0) {
        let paginator = document.getElementById('pagination');
        paginator.style.display = "none";
    }
    let count = document.getElementById('count');
    count.innerText = page;
    let address = search.value;
    // console.log(address);
    clearPostBox();
    addURl(address, page);
    // console.log(page);
})




function addURl(search, page) {
    // console.log(Request);

    Request(`http://www.omdbapi.com/?s=${search}&page=${page}&apikey=cc7bde1b`)
        .then(movies => movies.forEach(movie => addToPostBox(movie)))
        .catch(error => console.log("ERROR"))

}



//here I catch json from http request
//but i need to write it in my own json file

function addToPostBox(movie) {
    let infoBox = document.createElement("div");
    infoBox.className = "box";


    let img = document.createElement("img");
    img.className = "pic";
    img.src = movie.Poster;

    let title = document.createElement("div");
    title.className = "title";
    title.innerText = ` ${movie.Title}   ${movie.Year}`;

  
    posterBox.appendChild(infoBox);
    infoBox.appendChild(img);
    infoBox.appendChild(title);
    console.log(movie);
}


function clearPostBox() {
    let posterBox = document.querySelector('#poster');
    posterBox.innerHTML = "";

}


function Request(url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            if (xhr.status == 200) {
                let data = JSON.parse(xhr.responseText);
                // console.log(data);
                resolve(data.Search)
            } else {
                reject("xhr.statusText")
            }
        }
        xhr.send();
    })
}



