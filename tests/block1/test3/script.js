const h2_title = document.getElementById("h2")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")
const block_answers = document.getElementById("block_answers")
const answer_field = document.getElementById("text_input")
const correct_answer = document.getElementById("correct_answer")
const q1 = document.getElementById("q1")
const q2 = document.getElementById("q2")
const q3 = document.getElementById("q3")
const q4 = document.getElementById("q4")
const q5 = document.getElementById("q5")
const q6 = document.getElementById("q6")
const q7 = document.getElementById("q7")
const q8 = document.getElementById("q8")
const q9 = document.getElementById("q9")
const q10 = document.getElementById("q10")
const q11 = document.getElementById("q11")
const q12 = document.getElementById("q12")
const q13 = document.getElementById("q13")
const q14 = document.getElementById("q14")
const q15 = document.getElementById("q15")


/* 
ЩОБ ДОБАВИТИ КАРТИНКУ ПЕРЕЙМЕНУЙТЕ ЇЇ І ЗАМІСТЬ images//1.png ВКАЖІТЬ images//ЯК ВИ ЇЇ НАЗВАЛИ

ПИСАТИ У ФОРМАТІ



    ,    //<---- НЕ ЗАБУДЬТЕ ПРО КОМУ 
    {
        selected: "",
        question: "images//1.png",
        answers: [
            {text: "Текст варіанту 1", correct: false},
            {text: "Текст варіанту 2", correct: false}, //<---- false = не правильне, true = правильне
            {text: "Текст варіанту 3", correct: false},
            {text: "Текст варіанту 4", correct: false}, 
        ]
    }



КІЛЬКІСТЬ ВІДПОВІДЕЙ    НЕ     ОБОВ'ЯЗКОВО МАЄ БУТИ 4, просто скопіюйте останній рядок {text: "Текст варіанту", correct: false}, і натисніть Enter та вставте його
*/


const questions = [
    {
        selected: "",
        question: "images/1.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/2.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/3.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/4.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/5.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/6.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/7.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/8.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
        {
        selected: "",
        question: "images/9.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/10.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/11.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/12.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/13.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/14.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/15.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/16.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/17.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/18.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/19.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/20.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/21.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/22.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/23.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/24.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/25.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/26.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/27.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/28.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/29.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/30.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/31.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/32.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/33.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/34.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/35.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/36.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/37.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/38.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/39.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/40.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/41.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/42.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/43.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/44.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/45.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/46.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/47.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/48.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/49.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/50.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/51.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/52.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/53.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/54.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/55.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/56.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/57.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/58.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/59.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/60.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/61.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/62.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/63.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/64.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/65.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/66.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/67.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/68.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/69.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/70.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/71.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/72.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/73.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/74.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/75.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/76.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/77.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/78.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/79.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/80.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/81.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/82.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/83.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/84.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/85.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/86.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/87.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/88.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/89.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/90.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/91.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/92.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/93.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/94.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/95.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/96.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/97.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/98.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/99.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/100.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/101.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/102.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/103.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/104.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/105.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/106.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/107.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/108.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/109.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/110.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/111.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/112.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/113.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/114.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/115.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/116.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/117.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/118.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/119.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/120.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/121.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/122.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/123.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/124.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/125.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/126.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/127.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/128.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/129.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/130.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/131.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/132.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/133.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/134.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/135.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/136.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/137.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/138.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/139.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/140.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    }
]
const vidpovidnist_questions = [
    {
        question: "images/1-1.png",
        selected: "",
        correct: "1453",
    },
    {
        question: "images/1-2.png",
        selected: "",
        correct: "4123",
    },
    {
        question: "images/1-3.png",
        selected: "",
        correct: "3412",
    },
    {
        question: "images/1-4.png",
        selected: "",
        correct: "1523",
    },
    {
        question: "images/1-5.png",
        selected: "",
        correct: "3542",
    },
    {
        question: "images/1-6.png",
        selected: "",
        correct: "3514",
    },
    {
        question: "images/1-7.png",
        selected: "",
        correct: "4152",
    },
    {
        question: "images/1-8.png",
        selected: "",
        correct: "5123",
    },
    {
        question: "images/1-9.png",
        selected: "",
        correct: "4315",
    },
    {
        question: "images/1-10.png",
        selected: "",
        correct: "2354",
    },
    {
        question: "images/1-11.png",
        selected: "",
        correct: "4521",
    },
    {
        question: "images/1-12.png",
        selected: "",
        correct: "3152",
    },
    {
        question: "images/1-13.png",
        selected: "",
        correct: "5431",
    },
    {
        question: "images/1-14.png",
        selected: "",
        correct: "5324",
    },
    {
        question: "images/1-15.png",
        selected: "",
        correct: "4213",
    },
    {
        question: "images/1-16.png",
        selected: "",
        correct: "3425",
    },
    {
        question: "images/1-17.png",
        selected: "",
        correct: "3412",
    },
    {
        question: "images/1-18.png",
        selected: "",
        correct: "3514",
    },
    {
        question: "images/1-19.png",
        selected: "",
        correct: "2341",
    }
]

const hronology_questions = [
    {
        question: "images/2-1.png",
        selected: "",
        correct: "ВБГА",
    },
    {
        question: "images/2-2.png",
        selected: "",
        correct: "ГБВА",
    },
    {
        question: "images/2-3.png",
        selected: "",
        correct: "ВАБГ",
    },
    {
        question: "images/2-4.png",
        selected: "",
        correct: "ВАБГ",
    },
    {
        question: "images/2-5.png",
        selected: "",
        correct: "ВАБГ",
    },
    {
        question: "images/2-6.png",
        selected: "",
        correct: "ГАВБ",
    },
    {
        question: "images/2-7.png",
        selected: "",
        correct: "БГАВ",
    },
    {
        question: "images/2-8.png",
        selected: "",
        correct: "АГБВ",
    },
    {
        question: "images/2-9.png",
        selected: "",
        correct: "ВАБГ",
    },
    {
        question: "images/2-10.png",
        selected: "",
        correct: "БВАГ",
    },
    {
        question: "images/2-11.png",
        selected: "",
        correct: "ВГБА",
    },
    {
        question: "images/2-12.png",
        selected: "",
        correct: "ВАГБ",
    },
    {
        question: "images/2-13.png",
        selected: "",
        correct: "ГБАВ",
    }
]

const mul_ans_questions = [
    {
        question: "images/3-1.png",
        selected: "",
        correct: "147",
    },
    {
        question: "images/3-2.png",
        selected: "",
        correct: "256",
    },
    {
        question: "images/3-3.png",
        selected: "",
        correct: "235",
    },
    {
        question: "images/3-4.png",
        selected: "",
        correct: "356",
    },
    {
        question: "images/3-5.png",
        selected: "",
        correct: "145",
    },
    {
        question: "images/3-6.png",
        selected: "",
        correct: "156",
    },
    {
        question: "images/3-7.png",
        selected: "",
        correct: "124",
    },
    {
        question: "images/3-8.png",
        selected: "",
        correct: "156",
    },
    {
        question: "images/3-9.png",
        selected: "",
        correct: "346",
    },
    {
        question: "images/3-10.png",
        selected: "",
        correct: "246",
    }
]

let alreadyAsked = []
let vidpovidnist_alreadyAsked = []
let hronology_alreadyAsked = []
let mul_ans_alreadyAsked = []
let selectedAnswers = []
let vidpovidnist_selectedAnswers = []
let hronology_selectedAnswers = []
let mul_selectedAnswers = []
questionCount = 15
let currentQuestionIndex = 0
let score = 0
var test_completed = false
let RND_question = 0

let clicked_variant

let startingMinutes = 15
let time = startingMinutes * 60
let timerInterval
startTime = time
const countdownEl = document.getElementById('timer')
function updateCountdown() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60
    seconds = seconds < 10 ? '0' + seconds : seconds
    countdownEl.innerHTML =`Часу залишилося: ${minutes}:${seconds}`
    if (time == 0) {
        showScore()
        clearInterval(timerInterval)
        countdownEl.innerHTML = "Час вийшов!"
    } else {
        time--
    }if (time < startTime/2) {
        document.getElementById('timerDiv').style.background = "#f7c510"
    }
    if (time < startTime/4) {
        document.getElementById('timerDiv').style.background = "#f35b5b"
    }

    var today = new Date()
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()
    var time_str = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    var dateTime = date+' '+time_str
    document.getElementById("date").innerHTML = dateTime
}

function startQuiz() {
    test_completed = false
    time = startingMinutes * 60
    timerInterval = setInterval(updateCountdown, 1000)
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Наступне запитання"
    answer_field.style.display = "none"
    answer_field.disabled = false
    correct_answer.style.display = "none"
    block_answers.style.display = "none"
    alreadyAsked = []
    vidpovidnist_alreadyAsked = []
    hronology_alreadyAsked = []
    mul_ans_alreadyAsked = []
    selectedAnswers = []
    vidpovidnist_selectedAnswers = []
    hronology_selectedAnswers = []
    mul_selectedAnswers = []
    showQuestion()
}

function showQuestion() {
    resetState()
    if (currentQuestionIndex < 12) {
        let randomQuestionIndex = Math.floor(Math.random()*questions.length)
        let currentQuestion = questions[randomQuestionIndex]
        while (alreadyAsked.includes(currentQuestion)) {
            randomQuestionIndex = Math.floor(Math.random()*questions.length)
            currentQuestion = questions[randomQuestionIndex]
        }
        RND_question = randomQuestionIndex
        let questionNo = currentQuestionIndex + 1
        h2_title.innerHTML = "Питання №"+questionNo

        document.getElementById("question").src = currentQuestion.question

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button")
            button.innerHTML = answer.text
            button.classList.add("btn")
            answerButtons.appendChild(button)
            if (answer.correct) {
                button.dataset.correct = answer.correct
            }
            button.addEventListener("click" , selectAnswer)
        })
        this_Q = currentQuestion
    }
    else {
        nextButton.style.display = "block"
        answer_field.style.display = "block"
        correct_answer.style.display = "block"
        if (currentQuestionIndex == 12) {
            correct_answer.innerHTML = "У відповідях вказуйте лише числа.\n Наприклад: якщо ви хочете відповісти А-1 Б-2 В-3 Г-4, то впишіть 1234"
            let randomQuestionIndex = Math.floor(Math.random()*vidpovidnist_questions.length)
            let currentQuestion = vidpovidnist_questions[randomQuestionIndex]
            while (vidpovidnist_alreadyAsked.includes(currentQuestion)) {
                randomQuestionIndex = Math.floor(Math.random()*questions.length)
                currentQuestion = vidpovidnist_questions[randomQuestionIndex]
            }
            RND_question = randomQuestionIndex
            let questionNo = currentQuestionIndex + 1
            h2_title.innerHTML = "Питання №"+questionNo

            document.getElementById("question").src = currentQuestion.question
            answer_field.style.display = "block"
        } else if (currentQuestionIndex == 13) {
            correct_answer.innerHTML = "У відповідях вказуйте лише числа.\n Наприклад: якщо ви хочете відповісти 1-А 2-Б 3-В 4-Г, то вкажіть АБВГ"
            let randomQuestionIndex = Math.floor(Math.random()*hronology_questions.length)
            let currentQuestion = hronology_questions[randomQuestionIndex]
            while (hronology_alreadyAsked.includes(currentQuestion)) {
                randomQuestionIndex = Math.floor(Math.random()*hronology_questions.length)
                currentQuestion = hronology_questions[randomQuestionIndex]
            }
            RND_question = randomQuestionIndex
            let questionNo = currentQuestionIndex + 1
            h2_title.innerHTML = "Питання №"+questionNo

            document.getElementById("question").src = currentQuestion.question
            answer_field.style.display = "block"
        } else {
            correct_answer.innerHTML = "У відповідях вказуйте лише числа.\n Наприклад: якщо ви хочете відповісти 3, 4, 5, то вкажіть 345"
            let randomQuestionIndex = Math.floor(Math.random()*mul_ans_questions.length)
            let currentQuestion = mul_ans_questions[randomQuestionIndex]
            while (mul_ans_alreadyAsked.includes(currentQuestion)) {
                randomQuestionIndex = Math.floor(Math.random()*mul_ans_questions.length)
                currentQuestion = mul_ans_questions[randomQuestionIndex]
            }
            RND_question = randomQuestionIndex
            let questionNo = currentQuestionIndex + 1
            h2_title.innerHTML = "Питання №"+questionNo

            document.getElementById("question").src = currentQuestion.question
            answer_field.style.display = "block"
        }
    }
    const q_info_str = document.getElementById("question").src
    const cut_q_info_str = q_info_str.slice(36, -4)
    const q_info_num = cut_q_info_str.match(/\d+/g)
    document.getElementById("q_info").innerHTML = ""+q_info_num
}

function resetState() {
    answer_field.value = ""
    answer_field.style.display = "none"
    answer_field.classList.remove("correct")
    answer_field.classList.remove("incorrect")
    correct_answer.style.display = "none"
    nextButton.style.display = "none"
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e) {
    const q_id = document.getElementById("q"+(currentQuestionIndex+1))
    let currentQuestion = questions[RND_question]
    const selectedBtn = e.target
    Array.from(answerButtons.children).forEach(button => {
        button.classList.remove("selected")
        button.classList.remove("incorrect")
        button.classList.remove("correct")
    })
    q_id.classList.remove("incorrect")
    q_id.classList.remove("correct")
    if (alreadyAsked[currentQuestion] != null) {
        if (alreadyAsked[currentQuestionIndex].question == currentQuestion.question) {
            alreadyAsked.remove[currentQuestionIndex]
        }
    }
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect) {
        selectedBtn.classList.add("selected")
        selectedBtn.classList.add("correct")
        q_id.classList.add("correct")
        clicked_variant = selectedBtn
        score++
    } else {
        selectedBtn.classList.add("selected")
        selectedBtn.classList.add("incorrect")
        q_id.classList.add("incorrect")
        clicked_variant = selectedBtn
    }
    currentQuestion.selected = selectedBtn.innerHTML
    this_Q = currentQuestion
    nextButton.style.display = "block"
}

function showScore(){
    resetState()
    if (score < 5) {
        document.getElementById("question").src = "/siteHistoryTests/grades/very_bad.jpg"
    } else if (score < 10) {
        document.getElementById("question").src = "/siteHistoryTests/grades/bad.jpg"
    } else if (score < 14) {
        document.getElementById("question").src = "/siteHistoryTests/grades/average.jpg"
    } else if (score < 16) {
        document.getElementById("question").src = "/siteHistoryTests/grades/good.jpg"
    } else if (score >= 16) {
        document.getElementById("question").src = "/siteHistoryTests/grades/very_good.jpg"
    }
    clearInterval(timerInterval)
    h2_title.innerHTML =`Ви набрали ${score} з 21 балу!`
    nextButton. innerHTML = "Пройти знову"
    nextButton.style.display = "block"
    test_completed = true
    block_answers.style.display = "block"
    answer_field.style.display = "none"
}

function handleNextButton(){
    currentQuestionIndex++
    if (!test_completed){
        let currentQuestion
        if (currentQuestionIndex < 13) {
            selectedAnswers.push(clicked_variant)
            alreadyAsked.push(this_Q)
        }

        if (currentQuestionIndex == 13) {
            currentQuestion = vidpovidnist_questions[RND_question]
            const q_id = document.getElementById("q"+currentQuestionIndex)
            currentQuestion.selected = answer_field.value
            if(currentQuestion.selected == currentQuestion.correct) {
                answer_field.classList.add("correct")
                score = score +3
                q_id.classList.add("correct")
                selectedAnswers.push(answer_field)
                vidpovidnist_selectedAnswers.push(answer_field.value)
            } else {
                answer_field.classList.add("incorrect")
                selectedAnswers.push(answer_field)
                vidpovidnist_selectedAnswers.push(answer_field.value)
                q_id.classList.add("incorrect")
            }
            vidpovidnist_alreadyAsked.push(currentQuestion)
        }
        
        
        else if (currentQuestionIndex == 14) {
            currentQuestion = hronology_questions[RND_question]
            const q_id = document.getElementById("q"+currentQuestionIndex)
            currentQuestion.selected = answer_field.value
            if(currentQuestion.selected.toLocaleUpperCase() == currentQuestion.correct) {
                answer_field.classList.add("correct")
                score = score +3
                q_id.classList.add("correct")
                selectedAnswers.push(answer_field)
                hronology_selectedAnswers.push(answer_field.value)
            } else {
                answer_field.classList.add("incorrect")
                selectedAnswers.push(answer_field)
                hronology_selectedAnswers.push(answer_field.value)
                q_id.classList.add("incorrect")
            }
            hronology_alreadyAsked.push(currentQuestion)
        } 
        
        
        else if (currentQuestionIndex == 15) {
            currentQuestion = mul_ans_questions[RND_question]
            const q_id = document.getElementById("q"+currentQuestionIndex)
            currentQuestion.selected = answer_field.value
            if(currentQuestion.selected == currentQuestion.correct) {
                answer_field.classList.add("correct")
                score = score +3
                q_id.classList.add("correct")
                selectedAnswers.push(answer_field)
                mul_selectedAnswers.push(answer_field.value)
            } else {
                answer_field.classList.add("incorrect")
                selectedAnswers.push(answer_field)
                mul_selectedAnswers.push(answer_field.value)
                q_id.classList.add("incorrect")
            }
            mul_ans_alreadyAsked.push(currentQuestion)
            nextButton. innerHTML = "Завершити тест"
        }

        if(currentQuestionIndex < questionCount) {
            showQuestion()
        } else {
            showScore()
        }
    } else {
        startQuiz()
    }
    
}

nextButton.addEventListener("click", ()=>{
    handleNextButton()
})

function showCorrectAnswer(id) {
    resetState()
    nextButton.style.display = "block"
    if (id < 12) {
        alreadyAsked[id].answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        const isCorrect = button.dataset.correct === "true"
        if(alreadyAsked[id].selected.toLocaleUpperCase() === button.innerHTML) {
            button.classList.add("incorrect")
        } 
        if(isCorrect) {
            button.classList.add("correct")
        }
        button.disabled = true
        })
    } else if (id == 12) {
        answer_field.style.display = "block"
        answer_field.disabled = true
        if (vidpovidnist_alreadyAsked[0].selected == vidpovidnist_alreadyAsked[0].correct) {
            answer_field.classList.add("correct")
        } else {
            answer_field.classList.add("incorrect")
            correct_answer.style.display = "block"
            correct_answer.innerHTML = "Правильна відповідь: "+vidpovidnist_alreadyAsked[0].correct
        }
        answer_field.value = vidpovidnist_selectedAnswers[0]
    } else if (id == 13) {
        answer_field.style.display = "block"
        answer_field.disabled = true
        if (hronology_alreadyAsked[0].selected.toLocaleUpperCase() == hronology_alreadyAsked[0].correct) {
            answer_field.classList.add("correct")
        } else {
            answer_field.classList.add("incorrect")
            correct_answer.style.display = "block"
            correct_answer.innerHTML = "Правильна відповідь: "+hronology_alreadyAsked[0].correct
        }
        answer_field.value = hronology_selectedAnswers[0]
    } else if (id == 14) {
        answer_field.style.display = "block"
        answer_field.disabled = true
        if (mul_ans_alreadyAsked[0].selected == mul_ans_alreadyAsked[0].correct) {
            answer_field.classList.add("correct")
        } else {
            answer_field.classList.add("incorrect")
            correct_answer.style.display = "block"
            correct_answer.innerHTML = "Правильна відповідь: "+mul_ans_alreadyAsked[0].correct
        }
        answer_field.value = mul_selectedAnswers[0]
    }
    const q_info_str = document.getElementById("question").src
    const cut_q_info_str = q_info_str.slice(27, -4)
    const q_info_num = cut_q_info_str.match(/\d+/g)
    document.getElementById("q_info").innerHTML = ""+q_info_num
}

q1.addEventListener("click", ()=> {
    document.getElementById("question").src = alreadyAsked[0].question
    showCorrectAnswer(0)
})
q2.addEventListener("click", ()=> {
    document.getElementById("question").src = alreadyAsked[1].question
    showCorrectAnswer(1)
})
q3.addEventListener("click", ()=> {
    document.getElementById("question").src = alreadyAsked[2].question
    showCorrectAnswer(2)
})
q4.addEventListener("click", ()=> {
    document.getElementById("question").src = alreadyAsked[3].question
    showCorrectAnswer(3)
})
q5.addEventListener("click", ()=> {
    document.getElementById("question").src = alreadyAsked[4].question
    showCorrectAnswer(4)
})
q6.addEventListener("click", ()=> {
    document.getElementById("question").src = alreadyAsked[5].question
    showCorrectAnswer(5)
})
q7.addEventListener("click", ()=> {
    document.getElementById("question").src = alreadyAsked[6].question
    showCorrectAnswer(6)
})
q8.addEventListener("click", ()=> {
    document.getElementById("question").src = alreadyAsked[7].question
    showCorrectAnswer(7)
})
q9.addEventListener("click", ()=> {
    document.getElementById("question").src = alreadyAsked[8].question
    showCorrectAnswer(8)
})
q10.addEventListener("click", ()=> {
    document.getElementById("question").src = alreadyAsked[9].question
    showCorrectAnswer(9)
})
q11.addEventListener("click", ()=> {
    document.getElementById("question").src = alreadyAsked[10].question
    showCorrectAnswer(10)
})
q12.addEventListener("click", ()=> {
    document.getElementById("question").src = alreadyAsked[11].question
    showCorrectAnswer(11)
})
q13.addEventListener("click", ()=> {
    document.getElementById("question").src = vidpovidnist_alreadyAsked[0].question
    showCorrectAnswer(12)
})
q14.addEventListener("click", ()=> {
    document.getElementById("question").src = hronology_alreadyAsked[0].question
    showCorrectAnswer(13)
})
q15.addEventListener("click", ()=> {
    document.getElementById("question").src = mul_ans_alreadyAsked[0].question
    showCorrectAnswer(14)
})

startQuiz()