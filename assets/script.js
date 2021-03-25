// timer
var timeleft = 5;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Start the quiz!";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
// questions for the coding quiz challenge
var myQuestions = [
  {
    question: "Who invented javascript?",
    answers: {
      a: 'Yan Zhu',
      b: 'Brendan Eich',
      c: 'Douglas Crockford',
      d: 'none of the above'
    },
    correctAnswer: 'b'
  },
  {
    question: "Does a dot indicate a class or an ID?",
    answers: {
      a: 'class',
      b: 'ID',
      c: 'neither',
      d: 'both'
    },
    correctAnswer: 'a'
  },
  {
    question: "What keyword declares a variable?",
    answers: {
      a: 'var',
      b: 'variable',
      c: 'able',
      d: 'none of the above'
    },
    correctAnswer: 'a'
  },
  {
    question: "What surrounds a string?",
    answers: {
      a: 'brackets',
      b: 'quotes',
      c: 'curvy brackets',
      d: 'none of the above'
    },
    correctAnswer: 'b'
  },
  {
    question: "What values do booleans have?",
    answers: {
      a: 'true',
      b: 'false',
      c: 'neither',
      d: 'both true and false'
    },
    correctAnswer: 'd'
  },
];
// calling back the variables
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
function showQuestions(questions, quizContainer){
    var output = [];
    var answers;
    // for statement to generate quiz
    for(var i=0; i<questions.length; i++){
      answers = [];
      for(letter in questions[i].answers){
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }
    quizContainer.innerHTML = output.join('');
  }

  function showResults(questions, quizContainer, resultsContainer){   
    // variables to gather information
    var answerContainers = quizContainer.querySelectorAll('.answers');
    var userAnswer = '';
    var numCorrect = 0;
    
    // for else statement to return right or wrong answer
    for(var i=0; i<questions.length; i++){
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      if(userAnswer===questions[i].correctAnswer){
        numCorrect++;
        // colors the answers green or red depending on if they were right or not
        answerContainers[i].style.color = 'lightgreen';
      }
      else{
        answerContainers[i].style.color = 'red';
      }
    }
  // show how many questions were right
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }

  // show questions right away
  showQuestions(questions, quizContainer);
  
  // submit button
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

}