$(document).ready(function() {
    let correctAnswer = 0;
    let wrongAnswer = 0;
    let timer = 30;
    let gameStarted = false;
    let intervalId;
    let pick;
    const questions = [
      {
        question: "Who is Jerry's worst enemy?",
        choices: ['Newman', 'Kramer', 'George', 'Uncle Leo'],
        answer: 0
      },
      {
        question: 'How many seasons of Seinfeld are there?',
        choices: ['3', '1', '9', '7'],
        answer: 2
      },
      {
        question: 'Who works for the Yankees?',
        choices: ['Cosmo', 'Elaine', 'Jerry', 'George'],
        answer: 3
      },
      {
        question: "Who didn't live in the same building as Jerry",
        choices: ['Frank', 'Newman', 'Kramer', 'Cosmo'],
        answer: 0
      },
      {
        question: 'What was the name of the cafe?',
        choices: ['IHOP', "Monk's", "Helen's", 'Little Rock'],
        answer: 1
      },
      {
        question: 'When did the first episode originally air?',
        choices: ['1990', '1991', '1989', '1992'],
        answer: 2
      },
      {
        question: 'Who did Elaine work for?',
        choices: ['Mr. Monk', 'Uncle Leo', 'Jerry', 'J. Peterman'],
        answer: 3
      },
      {
        question: "What was the name of George's father",
        choices: ['Leo', 'Cosmo', 'Frank', 'Morty'],
        answer: 2
      },
      {
        question: 'Who played themselves in the show?',
        choices: ['Jerry', 'George', 'Kramer', 'Elaine'],
        answer: 0
      },
      {
        question: "What is Kramer's first name?",
        choices: ['Morty', 'Cosmo', 'Newman', 'Peterman'],
        answer: 1
      }
    ];
  
    $('#startButton').on('click', function() {
      $('#startButton').hide();
      runTimer();
      //creates done button
      //check if done and reset buttons have been created
      let done = $('#doneButton');
      let reset = $('#resetButton');
      console.log('buttons', done, reset);
      if (!done.length) {
        done = "<button id='doneButton'>Done</button>";
        $('#buttons').append(done);
      }
      if (!reset.length) {
        reset = "<button id='resetButton'>Reset</button>";
        $('#buttons').append(reset);
      }
      //creats done button click
      $('#doneButton').on('click', function() {
        calculateScore();
      });
      $('#resetButton').on('click', function() {
        initializeGame();
      });
  
      for (let i = 0; i < questions.length; i++) {
        //appends questions
        const trivia = questions[i].question;
        $('#questions').append("<p class='toAnswer'>" + trivia + '</p>');
        //appends list of choices
        var ulId = 'q' + i.toString();
        let htmlTemplate = "<ul id='" + ulId + "' class='jake-list'>";
        for (let k = 0; k < questions[i].choices.length; k++) {
          htmlTemplate +=
            "<li><input type='radio' name='" +
            ulId +
            "' value=" +
            k +
            '>' +
            questions[i].choices[k] +
            '</li>';
        }
        htmlTemplate += '</ul>';
        $('#questions').append(htmlTemplate);
      }
    });
  
    function initializeGame() {
      correctAnswer = 0;
      wrongAnswer = 0;
      gameStarted = true;
      timer = 30;
      $('#questions').html('');
      $('#startButton').show();
      $('#startButton').click();
    }
  
    function runTimer() {
      if (!gameStarted) {
        intervalId = setInterval(count, 1000);
        gameStarted = true;
      }
    }
  
    function timeConverter(t) {
      let minutes = Math.floor(t / 60);
      let seconds = t - minutes * 60;
  
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
  
      if (minutes === 0) {
        minutes = '00';
      } else if (minutes < 10) {
        minutes = '0' + minutes;
      }
  
      return minutes + ':' + seconds;
    }
  
    function count() {
      timer--;
      let converted = timeConverter(timer);
      $('#clock').text(converted);
    }
    
    function calculateScore() {
      for (let index = 0; index < questions.length; index++) {
        const ulElement = $('#q' + index + '');
        const answer = questions[index].answer.toString();
        
        let radioValue = $("input[name='q" + index + "']:checked").val();
        if (answer && radioValue) {
          if (answer.toString() === radioValue.toString()) {
            // Right answer
            console.log('right answer');
            ulElement.addClass('correct');
            correctAnswer ++;
            console.log(correctAnswer);
            
          } else {
            console.log('wrong answer');
            ulElement.addClass('wrong');
            wrongAnswer ++;
            
          }
        } else {
          console.log('Question was not answered');
          ulElement.addClass('wrong');
          wrongAnswer++;
          console.log(wrongAnswer);
          
        }
        $("#correctScore").text("Correct: " + correctAnswer);
        $("#wrongScore").text("False: " + wrongAnswer)
      }
      
      
    }
  });