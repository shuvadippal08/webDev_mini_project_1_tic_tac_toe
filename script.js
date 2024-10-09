let boxes = document.querySelectorAll(".box");
let resetBtn =  document.querySelector("#reset-btn");
let newGameBtn =document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let winShow = document.querySelector("#msg");
let turnO = true; //playerX,playerO
let moveCount = 0;
const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = ()=>{
    turnO = true;
    moveCount = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        moveCount++;
        checkWinner();
    });
});
const disableBoxes = ()=>{
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = ()=>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner)=>{
    if(winner ==="9"){
        msgContainer.classList.remove("hide");
        winShow.innerText ="You both got here.! Match is draw";
    }
    else{
        winShow.innerText =`Congratulation, Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
};


const checkWinner = ()=>{
    for(patterns of winningPatterns){
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val ==pos2val && pos2val ==pos3val){
                showWinner(pos1val);
            }
        }
    }

    if(moveCount === 9){
        showWinner("9");
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);