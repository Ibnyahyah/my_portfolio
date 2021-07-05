
const text = "Hi, my name <span>Yahyah Ridwan</span><br/>I'm a Front-End Developer."
const headText = document.querySelector(".h1");
console.log(headText);
let index = 0;

function writeText(){

    headText.innerHTML = text.slice(0, index);

    index++;

    if (index > text.length -1){
        index = 0;
    }
}

setInterval(writeText, 200);



