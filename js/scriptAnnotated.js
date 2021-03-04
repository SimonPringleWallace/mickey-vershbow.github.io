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

// create function with "event" and "question" as parameters.
//if target event inner text is equal to question.answer, log correct,
//if state.which, add a point to player1 score, toggle the "which" variable. ELSE give player2 a point and toggle which variable.
//After if statement, setBoard(questions)
//Add another else statement for if player selects wrong answer. Log incorrect, setBoard, toggle which state.
//! why is it written without double parens for the parameters?
const chooseAnswer = (event, question) => {
    if(event.target.innerText === question.answer) {
        console.log("correct");
    if(state.which) {
        player1++;
        state.which = !state.which
    } else {
        player2++;
        state.which = !state.which
    }
    setBoard(questions);
} else {
    console.log("incorrect");
    setBoard(questions);
    state.which = !state.which;
  }
};



//! set the board
// pass q as a parameter, fat arrow, curly bracket
//Create a random index and get a random question
const setBoard = ((q) => {
    const randomIndex = Math.floor(Math.random() * q.length);
    const randomQuestion = q[randomIndex];




    //! why .question and not .questions? or q? I don't really understand this
    // question.text = randomQuestion.questions;

    //Update player scores so they're equal to state of each player
    $p1Score = state.player1
    $p2Score = state.player2

    //Remove event listeners before adding new ones
    //select "li" elements and remove listeners with off() function
    //create an event listener for li elements, pass in a callback function "event", fat arrow curly brackets, then run chooseAnswer with event and randomQuestion as arguments

    $("li").off();
    $("li").on("click", (event) => {
        chooseAnswer(event, randomQuestion);
    })
})


//////////////////////////
// ! App Logic
//////////////////////////

//create ajax request
// then function with data as parameter
// you want questions to equal the data, but you need to map over the data in order to create a new array of just the info you want. data, items, map, q parameter, you just want q.fields

// setBoard with questions as parameter within the AJAX function

const URL = "https://cdn.contentful.com/spaces/1ooy33zp4esg/environments/master/entries?access_token=GwmWVEBSVzK_noU9IhoIaYblT31-CqoiESVSAdo7UJ0&content_type=triviaq";

$.ajax(URL)
.then((data) => {
    questions = data.items.map((q) => q.fields);
    console.log(data);
    console.log(items);
    setBoard(questions);
},
(error) => {
    console.log("bad request", error);
  }
);
