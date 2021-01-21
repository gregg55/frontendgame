
console.log("hello");

let keyValue =[];
let board = document.querySelectorAll(".letter") // pull keyinputs into the variable board
console.log (board);

board.addEventListener("click", function(){
    for (let i=0; i < board.length; i++)  {
        let keyValue = board[i].value;
        console.log(board[i].value)
}
});