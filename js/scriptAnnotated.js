//////////////////////////
// ! APP STATE
//////////////////////////

//! why don't i use jQuery when writing these key/value pairs?
//! why does which: true = player 1 turn?
const state = {
    p1Score: 0,
    p2Score: 0,
    which: true
};

//! why wouldn't this also be defined in state variable?
let questions = [];

//////////////////////////
// ! Main DOM Elements
//////////////////////////

const $p1Score = $("#player1 h4");
const $p2Score = $("#player2 h4")
const $a = $("#a");
const $b = $("#b");
const $c = $("#c");
const $d = $("#d");
const $e = $("#e");
const $answer = $("#answer");


//////////////////////////
// ! App Functions
//////////////////////////

//! choose the answer
// if target event inner text is equal to question.answer, log correct,
//if state.which, add a point to player1 score, toggle the "which" variable. ELSE give player2 a point and toggle which variable.
//After if statement, setBoard(questions)
//Add another else statement for if player selects wrong answer. Log incorrect, setBoard, toggle which state.

//! set the board
// pass q as a parameter, fat arrow, curly bracket
//Create a random index and get a random question

//! why .question and not .questions?
//Update question (question text = randomQuestion.question), and then each answer.text

//Update player scores so they're equal to state of each player

//Remove event listeners before adding new ones
//select "li" elements and remove listeners with off() function
//create an event listener for li elements, pass in a callback function "event", fat arrow curly brackets, then run chooseAnswer with event and randomQuestion as parameters




//////////////////////////
// ! App Logic
//////////////////////////

const URL = "https://cdn.contentful.com/spaces/1ooy33zp4esg/environments/master/entries?access_token=GwmWVEBSVzK_noU9IhoIaYblT31-CqoiESVSAdo7UJ0&content_type=triviaq";

//create ajax request
//then function with data as parameter
// you want questions to equal the data, but you need to map over the data in order to create a new array of just the info you want. data, items, map, q parameter, you just want q.fields

//setBoard with questions as parameter within then function
