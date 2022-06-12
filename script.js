let images = [];
let input = [];
let imagesRev = [];
let i = 2;
let j = 2;
let a =0;
let s=0;
let currImage;

function getImage() {
    const userInput = document.getElementById('input').value;
    input.push(userInput);
    const display = document.getElementById('display');
    display.innerText = "";
    src = "https://source.unsplash.com/random/500x500/?" + userInput + "=1"
    
    fetch(src).then((response) => {
        const img = document.createElement('img');
        img.setAttribute('src', response.url);
        display.appendChild(img);
        images.push(response);
        // a=images.length;
    });
    

    
    // fetch(src).then((response) => {currImage = response});
    
    
    
    document.getElementById('input').value = ''
}

function forward() {
    const userInput = input[input.length - 1];
    const display = document.getElementById('display');
    display.innerText = "";
    // const img = document.createElement('img');
    src = "https://source.unsplash.com/random/500x500/?" + userInput + "=" + i;
    i = i + 1;
    
   


    if (a===0) {
        fetch(src).then((response) => {
            const img = document.createElement('img');
            img.setAttribute('src', response.url);
            display.appendChild(img);
            images.push(response);
            j=2;
            
        });
    }

    else{
        
    
        const img = document.createElement('img');
        img.setAttribute('src', (images[images.length - a]).url);
        a=a-1;
        display.appendChild(img);

    }
    s=s+1;
}

function back() {
    const display = document.getElementById('display');
    display.innerText = "";
    const img = document.createElement('img');
    // imagesRev = images.slice().reverse();
    // src = imagesRev[j];
    // j = j + 1;
    img.setAttribute('src', (images[images.length - j]).url);
    j=j+1;
    display.appendChild(img);
    a = j - 2;
    s=s-1;
    // fetch(src).then((response) => {currImage = response});
}

function download() {
    const a = document.createElement('a')
    a.href=images[s].url
    a.download = "jii"
    document.body.appendChild(a)
    a.setAttribute('target','none');
    a.click()
    document.body.removeChild(a)
  }
  
  