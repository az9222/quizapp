

function populate () {
    if (quiz.isEnded()) {
        alert("Congratulations! You have completed Ms. Zhou's quiz! Your final score was " + quiz.score + " out of " + questionsList.length + "! For more practice, please go to " + website);
    } else {
        //show questions
        var element = document.querySelector("#question-text"); //getting ahold of the question
        element.innerHTML = quiz.getQuestionByIndex().inquiry; //setting the question's text to be the question
        var answerButtons = document.querySelector(".buttons");
        answerButtons.innerHTML = ""; //resetting after the container with buttons has been selected
        let answerArray = quiz.getQuestionByIndex().choices;
        for (var i = 0; i < answerArray.length; i++) {
            var btn = document.createElement("button");
            btn.setAttribute("class", "answer-choice" ); //<button class="answer-choice"> </button>
            let btnText = document.createTextNode(answerArray[i]);
            btn.appendChild(btnText); //<button class="answer-choice"> Angela </button>
            answerButtons.appendChild(btn);

            var clickBtn = btn.addEventListener("click", function(event){
                var value = event.target.innerText;
                quiz.guess(value)

            })

        }
        var selectProgress = document.querySelector(".progress");
        selectProgress.innerText = `Question ${quiz.questionIndex+1} of ${questionsList.length}`
    }
}

let questionsList = [ 
    new Question("What is 1/4 + 2/3?", ["11/12", "3/7", "1/4", "1/6"], "11/12",
    { 
      "3/7": "You did not change the denominators to be the same! You cannot add or subtract fractions when the denominators are not the same.",
      "1/4": "Both the numerator and denominator have to be manipulated! You only changed the denominators to be the same.",
      "1/6": "You multiplied the answers instead of adding!"
    }), 
    new Question("What is 3/4 x 1/5?", ["15/4", "19/20", "3/20", "6"], "3/20", 
    {
        "15/4": "You applied the keep change flip rule! This rule is only for dividing fractions", 
        "19/20": "You added the fractions. Remember, multiplying fractions does not need the denominators to be the same.", 
        "6": "This answer is incorrect."
    }),
    new Question("What is 3/10 ÷ 1/5?", ["3/2", "2/3", "3/50", "1/2"],"3/2", 
    {
        "2/3": "You applied the keep change flip rule to the numerator instead of the denominator!", 
        "3/50": "You multiplied the two fractions", 
        "1/2": "You added the two fractions!"
    }),
    new Question("What is 8 x 1/4?", ["33/4", "2", "32", "1/2"], "2", 
    {
        "33/4": "You do not need common denominators!", 
        "32": "You divided the fraction by applying keep change flip!", 
        "1/2": "This answer is incorrect."
    })
];

let quiz = new Quiz (questionsList);

populate();

