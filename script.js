
// <------------------   Validate that JS Script is working ---------->
// View on Console log - Sports Trivia
console.log("Sports Trivia Game is Fun!"); // Worked correctly


// <------------------   View All Questions in Class .q ---------->
// view & console log all values of Class .q  -  shows all questions

let q = document.querySelectorAll('.q')
console.log(q) // Worked Correctly in console log!


// <------------------   Restart Section ---------->
// Set up Restart on Click - Use query selector for Class .restart & Event Listener to click 
let restart = document.querySelector('.restart')
restart.addEventListener('click', restartTrivia)
function restartTrivia(){
window.location.href = window.location.href; // to Restart - found this per Slack Overflow
}


// <------------------   Correct Answer ---------->
// Find Correct answers & pull this data
let correct =document.querySelectorAll('.correct') // pull class.correct and place into variable correct

for(let i=0; i<correct.length; i++){  // loop through correct.length
correct[i].addEventListener('click', correctAnswer) // on event click - place correct answers into correctAnswer
console.log('looping for correct answers')  // console log 
}


function correctAnswer(evt){
console.log('evt target', evt.target) //
if(evt.target.classList.contains('correct')){  // the event.target.className returns an array of correct answers
console.log('Placing correct anwers ')
updateScore()  // update Score based on if / Else 
}
}





// <------------------   Restart Section ---------->
// Set up START on Click - Use query selector & Event Listener

let currentQIndex = 0
let previousQIndex = 0
let score = 0

let start= document.querySelector('.start')
let option = document.querySelectorAll('.option')
let directions= document.querySelector('.directions')

start.addEventListener('click', startTrivia)
function startTrivia(){
q[currentQIndex].style.display = 'block' 
//this will make the first question load
console.log('current', q[currentQIndex])
directions.style.display= 'none' //will set the class .direction to hidden 
//removes the directions and start button 
}
console.log(q)
// it makes 
option.forEach(buttons =>{  // forEach command - 
buttons.addEventListener('click', next)
})

function next(evt){
console.log('this is next')
evt.preventDefault()
//this prevents the page from default 
previousQIndex = currentQIndex
currentQIndex++
console.log(q[currentQIndex])
q[previousQIndex].style.display = 'none' 
//removes last question
q[currentQIndex].style.display = 'block' 
//display next question
}


// <------------------   Scoring Section  ---------->
// Set up Score Criteria & Grading  - Use IF /ELSE IF Statements

let result = document.querySelector('.result') // pull result data 


function updateScore(){
score++ // increment operator (++) adds one to operand and returns value
if(score === 10){
result.textContent = '100% - You are a Sports Fan!'
} else if(score === 9 ){
result.textContent= '90% Great job - Go Hawks!'
} else if( score === 8){
result.textContent = '80% Good job- Go Hawks!!'
} else if( score === 7){
result.textContent= '70% Good job- Go Hawks!!'
}else if(score === 6){
result.textContent = '60% Looks Good - Go Hawks!!'
}else if(score === 5){
result.textContent = '50% Looks Good - Go Hawks!'
}else if(score === 4){
result.textContent = '40% Looks Good - Go Hawks!'
}else if(score === 3){
result.textContent = '30% Looks Good - Go Hawks!'
}else if(score === 2){
result.textContent= '20% Looks Good - Go Hawks!'
}else if(score === 1){
result.textContent = '10% Looks Good - Go Hawks!'
}else if(score === 0){
result.textContent = '0% Looks Good - Go Hawks!'
}
}
console.log('updated score', score) // Console log - score has been updated

