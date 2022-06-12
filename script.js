let images = [];
let input = [];
let imagesRev = [];
let i = 2;
let j = 1;
let a = -1;
let src;
let currImage;

function getImage() {
    const userInput = document.getElementById('input').value;
    input.push(userInput);
    const display = document.getElementById('display');
    display.innerText = "";
    const img = document.createElement('img');

    src = "https://source.unsplash.com/random/500x500/?" + userInput + "=1"
    
    fetch(src).then((response) => {currImage = response});
    images.push(src);
    img.setAttribute('src', src);
    display.appendChild(img);
    document.getElementById('input').value = ''
}

function forward() {
    const userInput = input[input.length - 1];
    const display = document.getElementById('display');
    display.innerText = "";
    const img = document.createElement('img');

    if (a >= 0) {
        src = imagesRev[a];
        img.setAttribute('src', src);
        display.appendChild(img);
        a=a-1;
        fetch(src).then((response) => {currImage = response});
    }

    else{
     src = "https://source.unsplash.com/random/500x500/?" + userInput + "=" + i;
    i = i + 1;
    images.push(src);
    img.setAttribute('src', src);
    display.appendChild(img);
    fetch(src).then((response) => {currImage = response});
}
}

function back() {
    const display = document.getElementById('display');
    display.innerText = "";
    const img = document.createElement('img');
    imagesRev = images.slice().reverse();
    src = imagesRev[j];
    j = j + 1;
    img.setAttribute('src', src);
    display.appendChild(img);
    a = a + 1;
    fetch(src).then((response) => {currImage = response});
}

function download() {
    const a = document.createElement('a')
    a.href = currImage.url;
    a.download = "jii"
    document.body.appendChild(a)
    a.setAttribute('target','none');
    a.click()
    document.body.removeChild(a)
  }
  
  