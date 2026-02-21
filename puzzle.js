
const board = document.querySelector(".board");
// let noOfTiles = 9;
// let tilesList = [
//     [{row:0,column:0},{row:0,column:1},{row:0,column:2}],
//     [{row:1,column:0},{row:1,column:1},{row:1,column:2}],
//     [{row:2,column:0},{row:2,column:1},{row:2,column:2}]
// ];
let tileList = [[],[],[]];
// console.log(tilesList);
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

for(let row = 0; row < 3; row++){
    for(let column = 0; column < 3; column++){
        let tile = document.createElement("div");

        if(row === 2 && column === 2){
            tile.classList.add("empty");
        }else{
            tile.classList.add("tile");
            tile.setAttribute("draggable","true");
            tile.style.backgroundImage =`url('${imageList[0]}')`;
            tile.style.backgroundSize = "300% 300%";
            let posX = column * 50;
            let posY = row * 50;
            tile.style.backgroundPosition = `${posX}% ${posY}%`;
        }
        tileList[row][column] = tile;
        board.appendChild(tile);
    }
}

console.log(tileList);