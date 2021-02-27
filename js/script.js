//////////////////////////
// ! APP STATE
//////////////////////////

const state = {
    player1: 0,
    player2: 0,
    currentQuestion: {} //empty obect
}

//////////////////////////
// ! Main DOM Elements
//////////////////////////

const question = document.querySelector("#question");
const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const d = document.querySelector("#d");
const e = document.querySelector("#e");
const p1Score = document.querySelector("#player1 h4");
const p2Score = document.querySelector("#player2 h4");

console.log(p1Score, p2Score);

//////////////////////////
// ! Main App Logic
//////////////////////////




// const BASE_URL = "https://cdn.contentful.com"
// const API_KEY = "/spaces/1ooy33zp4esg/environments/master/entries?access_token=GwmWVEBSVzK_noU9IhoIaYblT31-CqoiESVSAdo7UJ0&&content_type=triviaq"

const COMPLETE_URL = "https://cdn.contentful.com/spaces/1ooy33zp4esg/environments/master/entries?access_token=GwmWVEBSVzK_noU9IhoIaYblT31-CqoiESVSAdo7UJ0&&content_type=triviaq"


$.ajax(URL)
       .then((data) => {
           console.log(data);
       });
