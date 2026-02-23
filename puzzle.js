const board = document.querySelector(".board");
let ogTileList = [1,2,3,4,5,6,7,8,0];
let tileList = [1,2,3,4,5,6,7,8,0];
let random = 0;
let currentScore = 10000;
const imageList = [
    "https://images.unsplash.com/photo-1594476664296-8c552053aef3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ,
    "https://images.unsplash.com/photo-1604922824961-87cefb2e4b07?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ,
    "https://images.unsplash.com/photo-1602015103066-f45732e2aa84?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ,
    "https://images.unsplash.com/photo-1599385549907-a8a47fb6e402?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ,
    "https://plus.unsplash.com/premium_photo-1669349127520-fa1e30b02055?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

function render(){
    board.innerHTML = "";
    tileList.forEach((tileNo, index) => {
        let tile = document.createElement("div");
        tile.dataset.index = index;
        if(tileNo !== 0){
            tile.classList.add("tile");
            
            let posX = ((tileNo-1)%3) * 50;
            let posY = Math.floor((tileNo-1)/3) * 50;
            
            tile.style.backgroundImage =`url('${imageList[random]}')`;
            tile.style.backgroundSize = "300% 300%";
            tile.style.backgroundPosition = `${posX}% ${posY}%`;
        }else{
            tile.classList.add("empty");
        }
        board.appendChild(tile);
    });
}
const overlay = document.querySelector(".overlay");
const button = document.querySelector(".start");
const timer = document.querySelector("#time-elapsed");
const score = document.querySelector("#score");


button.addEventListener("click",() => {
    overlay.style.display = "none";
    random = Math.abs(Math.floor(Math.random()*10 - 4));
    play();
    let min = 4;
    let sec = 60
    timeCount = setInterval(()=>{
        if(min === 0 && sec === 0){
            overlay.style.display = "flex";
            clearInterval(timeCount);
            currentScore = 10000;
        }else if(sec === 0){
            min--;
            sec = 60;
        }
        sec--;
        timer.textContent = `min:${min} sec:${sec}`;
    },1000);
});

board.addEventListener("click", (e) => {

    if (!e.target.classList.contains("tile")){
        return;
    }

    const clickedIndex = Number(e.target.dataset.index);
    const emptyIndex = tileList.indexOf(0);

    if (isAdjacent(clickedIndex, emptyIndex)) {
        swap(clickedIndex, emptyIndex);
        render();
        currentScore = currentScore-10;
        score.textContent = currentScore;
    }

});

function isAdjacent(i1, i2){
    let row1 = Math.floor(i1/3);
    let column1 = i1%3;

    let row2 = Math.floor(i2/3);
    let column2 = i2%3;

    if(row1 === row2 && Math.abs(column1 - column2) === 1 || Math.abs(row1 - row2) === 1 && column1 === column2){
        return true;
    }
    return false;
}

function swap(i1, i2){
    let temp = tileList[i1];
    tileList[i1] = tileList[i2];
    tileList[i2] = temp;
}

function shuffle(tilesArray){
    for(let i = tilesArray.length-1; i > 0; i--){
        let random = Math.floor(Math.random()*9);
        [tilesArray[i], tilesArray[random]] = [tilesArray[random], tilesArray[i]];
    }
    return tilesArray;
}

function play(){
    tileList = shuffle(tileList);
    render();
}
