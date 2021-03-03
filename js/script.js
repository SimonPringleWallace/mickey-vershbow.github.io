//////////////////////////
// ! APP STATE
//////////////////////////

const state = {
    player1: 0,
    player2: 0,
    currentQuestion: {} //empty obect
}

let questions = [];

// //////////////////////////
// ! Main DOM Elements
// //////////////////////////

const $question = $("#question");
const $a = $("#a");
const $b = $("#b");
const $c = $("#c");
const $d = $("#d");
const $e = $("#e");
const $p1Score = $("#player1 h4");
const $p2Score = $("#player2 h4");

console.log($p1Score, $p2Score);

////////////////////////////
// ! Functions
////////////////////////////

const chooseAnswer = (event, question) => {
    console.log(event)
    if(event.target.innerText === question.answer){
        console.log("correct");
    } else {
    console.log("incorrect");
  }
}

const setBoard = (q) => {
    //Getting a random question
    const randomIndex = Math.floor(Math.random() * q.length);
    const randomQuestion = q[randomIndex];

    //Update question
    $question.text(randomQuestion.question);
    $a.text(randomQuestion.a)
    $b.text(randomQuestion.b)
    $c.text(randomQuestion.c)
    $d.text(randomQuestion.d)
    $e.text(randomQuestion.e)

    //update players scores
    $p1Score.text(state.player1)
    $p2Score.text(state.player2)

    $("li").on("click", (event) => {
        chooseAnswer(event, randomQuestion)
    });
}

//////////////////////////
// ! Main App Logic
//////////////////////////

// const BASE_URL = "https://cdn.contentful.com"
// const API_KEY = "/spaces/1ooy33zp4esg/environments/master/entries?access_token=GwmWVEBSVzK_noU9IhoIaYblT31-CqoiESVSAdo7UJ0&&content_type=triviaq"

const COMPLETE_URL = "https://cdn.contentful.com/spaces/1ooy33zp4esg/environments/master/entries?access_token=GwmWVEBSVzK_noU9IhoIaYblT31-CqoiESVSAdo7UJ0&content_type=triviaq";

// function handleGetData(event) {
//     event.preventDefault();
//     userInput = $input.val();
$.ajax(COMPLETE_URL)
    .then((data) => {
    //define which state variable = data
    questions = data.items.map((q) => q.fields);
    console.log(data);
    console.log(questions);

    setBoard(questions);
    //define render function
    },
    (error) => {
        console.log("bad request", error)
    }
  );
// }
