function randomColor() {
    let rgb1 = Math.floor(Math.random() * 255);
    let rgb2 = Math.floor(Math.random() * 255);
    let rgb3 = Math.floor(Math.random() * 255);

    return (`rgb(${rgb1}, ${rgb2}, ${rgb3})`);
}

function changeColor(e){
    if (Number(e.currentTarget.style.backgroundColor == "rgb(255, 255, 255)")){
        e.currentTarget.style.backgroundColor = randomColor();
    } else {
        opac = e.currentTarget.style.opacity;
        opac -= 0.1
        e.currentTarget.style.opacity = opac;
    }

}

function getInput(){
    const input = document.getElementById("input");
    let userText = input.value;
    remakeGrid(userText);
}

function remakeGrid(dimension){
    const wrapper = document.querySelector("#wrapper");
    while (wrapper.firstChild){
        wrapper.removeChild(wrapper.firstChild);
    }

    let gridSize = ''
    for(let i=0; i<dimension; i++){
        gridSize += ' 1fr'
    }
    wrapper.style.gridTemplateColumns = gridSize;

    for(let i=1; i<=(dimension * dimension); i++){
        const divbox = document.createElement('div');
        divbox.style.backgroundColor = '#FFFFFF';
        divbox.style.opacity = "1";
        wrapper.appendChild(divbox);
    }

    const divs = document.querySelectorAll('div');
    for(let i=1; i<divs.length; i++){
        divs[i].addEventListener("mouseout", changeColor, false);
    }

    const userInput = document.getElementById('btn')
    userInput.addEventListener("click", getInput, false);

    
}

const wrapper = document.querySelector("#wrapper");

for(let i=1; i<=100; i++){
    const divbox = document.createElement('div');
    //text.textContent = `Text ${i}`;
    divbox.style.backgroundColor = '#FFFFFF';
    divbox.style.opacity = '1';
    wrapper.appendChild(divbox);
}

const divs = document.querySelectorAll('div');
for(let i=1; i<divs.length; i++){
    divs[i].addEventListener("mouseout", changeColor, false);
}

const userInput = document.getElementById('btn')
userInput.addEventListener("click", getInput, false);

