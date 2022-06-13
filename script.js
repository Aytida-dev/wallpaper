//model
let images = [];
let input = [];
let i = 2;
let j = 2;
let a = 0;
let s = 0;

function push(userInput) {
    input.push(userInput);

}

function saveImage(response) { 
    images.push(response);
 }

 function iAnds(){
    i=i+1;
    s=s+1;
 }

 function jaAnds(){
    j = j + 1;
    a = j - 2;
    s = s - 1;
 }

//view
function render() {
    const display = document.getElementById('display');
    display.innerText = "";
    fetch(src).then((response) => {
        const img = document.createElement('img');
        img.setAttribute('src', response.url);
        display.appendChild(img);
        saveImage(response);
    });
   
}

function render1(x) {
    const display = document.getElementById('display');
    display.innerText = "";
    const img = document.createElement('img');
    img.setAttribute('src', (images[images.length - x]).url);
    display.appendChild(img);
}
//control
function download() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", images[s].url, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = imageUrl;
        tag.download = "hii";
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    }
    xhr.send();
}

function getImage() {
    const userInput = document.getElementById('input').value;
    push(userInput);
    src = "https://source.unsplash.com/random/1024x500/?" + userInput + "=1"

    render();
    document.getElementById('loader').style.opacity =1
    document.getElementById('back').style.opacity =1
    document.getElementById('forward').style.opacity =1
    document.getElementById('download').style.opacity =1
    document.getElementById('input').value = ''
}

function forward() {
    const userInput = input[input.length - 1];

    src = "https://source.unsplash.com/random/1024x500/?" + userInput + "=" + i;
    
    iAnds();

    if (a === 0) {
        render();
        j = 2;
    }

    else {

        render1(a);

        a = a - 1;

    }
    
}

function back() {
    render1(j);
   jaAnds();
}

