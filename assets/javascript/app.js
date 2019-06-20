$(document).ready(function () {
    let correctAnswer = 0;
    let wrongAnswer = 0;
    let timer = 30;
    let gameStarted = false;
    let intervalId;
    let pick;
    const questions = [
        {
            question: "Who is Jerry's worst enemy?",
            choices: ["Newman", "Kramer", "George", "Uncle Leo"],
            answer: 0,
        },
        {
            question: "How many seasons of Seinfeld are there?",
            choices: ["3", "1", "9", "7"],
            answer: 2,
        },
        {
            question: "Who works for the Yankees?",
            choices: ["Cosmo", "Elaine", "Jerry", "George"],
            answer: 3,
        },
        {
            question: "Who didn't live in the same building as Jerry",
            choices: ["Frank", "Newman", "Kramer", "Cosmo"],
            answer: 0,
        },
        {
            question: "What was the name of the cafe?",
            choices: ["IHOP", "Monk's", "Helen's", "Little Rock"],
            answer: 1,
        },
        {
            question: "When did the first episode originally air?",
            choices: ["1990", "1991", "1989", "1992"],
            answer: 2,
        },
        {
            question: "Who did Elaine work for?",
            choices: ["Mr. Monk", "Uncle Leo", "Jerry", "J. Peterman"],
            answer: 3,
        },
        {
            question: "What was the name of George's father",
            choices: ["Leo", "Cosmo", "Frank", "Morty"],
            answer: 2,
        },
        {
            question: "Who played themselves in the show?",
            choices: ["Jerry", "George", "Kramer", "Elaine"],
            answer: 0,
        },
        {
            question: "What is Kramer's first name?",
            choices: ["Morty", "Cosmo", "Newman", "Peterman"],
            answer: 1,
        },
    ];
    
    $(".doneButton").on("click", function () {
        console.log("iv been clicked yay")
        endGame();
        $(".startButton").show();
        $(".doneButton").hide();
       
    });

    $(".startButton").on("click", function () {
        console.log("iv been clicked");
        $(".startButton").hide();
        $(".doneButton").show();
        initializeGame();
        
        for (let i = 0; i < questions.length; i++) {
            console.log(questions[i].question);
            //appends questions
            const trivia = (questions[i].question);
            $("#questions").append("<p class='toAnswer'>" + trivia + "</p>");
            //appends list of choices
            let htmlTemplet = "<ul>";
            for (let k = 0; k < questions[i].choices.length; k++) {
                console.log(questions[i].choices[k]);
                htmlTemplet += "<li><input type='radio'>" + questions[i].choices[k] + "</li>";

            };
            htmlTemplet += "</ul>";
            $("#questions").append(htmlTemplet);

        };
    });

    function initializeGame() {
        correctAnswer = 0;
        wrongAnswer = 0;
        timer = 30;

        runTimer();
    };



    function runTimer() {
        if (!gameStarted) {
            intervalId = setInterval(count, 1000);
            gameStarted = true;
        }
    };

    function timeConverter(t) {

        let minutes = Math.floor(t / 60);
        let seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    };

    function count() {
        timer--
        let converted = timeConverter(timer);
        $("#clock").text(converted);
    };

    function endGame() {
        clearInterval(intervalId);
        $("#questions").html("<p>'Correct '" + correctAnswer + "</p>");
        $("#questions").append("<p>'Wrong '" + wrongAnswer + "</p>");

    };




















})