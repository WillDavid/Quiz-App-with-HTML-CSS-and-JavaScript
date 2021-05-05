

const question = document.getElementById("question");

const choices = Array.from(document.getElementsByClassName('choice-text'));


let currentQuestion = {};

let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Qual é o nome do personagem principal de Naruto?",
        choice1: "Kakashi",
        choice2: "Naruto",
        choice3: "Rock Lee",
        choice4: "Sakura",
        answer: 1
        
    },

    {
        question: "Qual é o nome do personagem principal de Naruto?",
        choice1: "Kakashi",
        choice2: "Naruto",
        choice3: "Rock Lee",
        choice4: "Sakura",
        answer: 1
        
    }
]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

function startGame(){
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions)
}

startGame();