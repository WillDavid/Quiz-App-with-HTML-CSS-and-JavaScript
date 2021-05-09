

const question = document.getElementById("question");

const questionCounterText = document.getElementById('questionCounter');

const scoreText = document.getElementById('score');




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
        answer: 2
        
    },

    {
        question: "Qual é o nome do personagem principal de DragonBall?",
        choice1: "Minato",
        choice2: "Goku",
        choice3: "Ichigo",
        choice4: "Naruto",
        answer: 2
        
    }
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [ ... questions];
    getNewQuestion();
}

getNewQuestion = () => {

    if(availableQuestions.length === 0 | questionCounter >= MAX_QUESTIONS){
        return window.location.assign('end.html');
    }

    questionCounter++;
    questionCounterText.innerHTML = `${questionCounter}/${MAX_QUESTIONS}`;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);



    currentQuestion = availableQuestions[questionIndex];


    question.innerText = currentQuestion.question;

    
    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct'){
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            
       

            getNewQuestion();
        }, 1000)

    

    })
})

incrementScore = num => {
    score = score + num;
    scoreText.innerHTML = score;
}

startGame();