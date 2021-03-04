//////////////////////////
// ! APP STATE
//////////////////////////

const state = {
    player1: 0,
    player2: 0,
    which: true
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
    console.log(event.target.textContent);
    console.log(question.answer);
    if (event.target.textContent === question.answer){
        console.log("correct");
        if (state.which) {
            state.player1++;
            state.which = !state.which;
        }else{
            state.player2++
            state.which = !state.which
        }
        setBoard(questions);
    } else {
        console.log("incorrect")
        setBoard(questions);
        state.which = !state.which;
  }
};

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

    // remove the event listener before adding a new one
    $("li").off();
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


$.ajax(COMPLETE_URL)
    .then((data) => {
    questions = data.items.map((q) => q.fields);
    console.log(data);
    console.log(questions);
    setBoard(questions);
    },
    (error) => {
        console.log("bad request", error)
    }
  );
