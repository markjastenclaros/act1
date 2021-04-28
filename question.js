
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;

}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var a = 0; a < choices.length; a++) {
            var element = document.getElementById("choice" + a);
            element.innerHTML = choices[a];
            guess("btn" + a, choices[a]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score is: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("1. Hyper Text Markup Language Stands For?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
    new Question("2. Which Language is used for Styling Web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("3. Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("4. Which is Used to Connect To Database?", ["PHP", "HTML", "JavaScript", "All"], "PHP"),
    new Question("5. Who Invented JavaScript?", ["Douglas Crockford", "Sheryl Sanberg", "Brendan Eich", "None of them"], "Brendan Eich"),
    new Question("6. Which of the following is the Server Side Scripting Language?",["HTML","CSS","JavaScript","PHP"], "PHP"),
    new Question("7. What will be the value of $var?",["0","1","2","NULL"], "0"),
    new Question("8. What does PHP stands for?",["Preprocessed HyperText Page","Hypertext Markup Language","HyperText Preprocessor", "HyperText Transfer Protocol"],"HyperText Preprocessor"),
    new Question("9. Which Tool can you use to ensure code quality?",["Angular","jQuery","RequireJS","ESLint"],"ESLint"),
    new Question("10. Which one of these is a JavaScript package manager?",["Node.js","Typescript","npm","Script"],"npm")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();