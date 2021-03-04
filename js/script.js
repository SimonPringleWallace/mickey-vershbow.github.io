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
const $correctAnswer = $("#correct-answer")

const container = document.querySelector('.dropdown-menu');
const restart = container.querySelector('sl-menu-item[value="restart"]');
const reading = container.querySelector('sl-menu-item[value="reading"]');
const action = container.querySelector('sl-menu-item[value="action"]');
const nextQuestion = document.querySelector('#nextQuestion');


////////////////////////////
// ! Functions
////////////////////////////

const chooseAnswer = (event, question) => {
    if (event.target.textContent === question.answer){
        console.log("Correct! The answer is: " + question.answer);
        highlightCorrectAnswer();
        if (state.which) {
            state.player1++;
            state.which = !state.which;
            document.getElementById("correct-answer").textContent = "Correct! The answer is: " + question.answer;
        }else{
            state.player2++
            document.getElementById("correct-answer").textContent = "Correct! The answer is: " + question.answer;
            state.which = !state.which
        }
        setBoard(questions);
    } else {
        console.log("incorrect")
        highlightCorrectAnswer();
        document.getElementById("correct-answer").textContent = "Incorrect. The answer is " + question.answer;
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

    // ANSWERS event listener; remove the previous event listener before adding a new one so they don't accumulate
    $("li").off();
    $("li").on("click", (event) => {
        chooseAnswer(event, randomQuestion)
    });
}

// Start a new game
// const setNewBoard = (q) => {
//     //Getting a random question
//     const randomIndex = Math.floor(Math.random() * q.length);
//     const randomQuestion = q[randomIndex];

//     //Update question
//     $question.text(randomQuestion.question);
//     $a.text(randomQuestion.a);
//     $b.text(randomQuestion.b);
//     $c.text(randomQuestion.c);
//     $d.text(randomQuestion.d);
//     $e.text(randomQuestion.e);

//     //update players scores
//     $p1Score.text(0);
//     $p2Score.text(0);

//     // Restart Game event listener; remove the previous event listener before adding a new one so they don't accumulate
//     $("#restart").off();
//     $("#restart").on("click", (event) => {
//         chooseAnswer(event, randomQuestion);
//         console.log("the game was restarted")
//     });
// }

const highlightCorrectAnswer = () => {
    if(state.which){
        document.querySelector("#player1").style.backgroundColor = "green";
    } else {
        document.querySelector("#player1").style.backgroundColor = "red";
    }
    if(!state.which){
        document.querySelector("#player2").style.backgroundColor = "green";
    } else {
        document.querySelector("#player2").style.backgroundColor = "red";
    }
    //reset button color
}

// Update player button color
// const resetButtonColor = () => {
//     $("#player1").css("background-color", "grey");
//     $("#player2").css("background-color", "grey");
// }


////////////////////////////////////
//! Dropdown Menu Event Listeners
///////////////////////////////////

//! how do I set the event listener to open a new link when the button is clicked?
restart.addEventListener('click', () => console.log('game restarted'));
reading.addEventListener('click', () => console.log('extracurricular reading links'));
action.addEventListener('click', () => console.log('links to things you can do'));

// let $readingLinks = $(`<a id="readingLink" href="http://www.google.com"></a>`)
// $("#readingLink").attr("target", "_blank");


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
