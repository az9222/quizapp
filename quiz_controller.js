class Question {
    constructor (inquiry, choices, rightAnswer, wrongAnswer) {
        this.inquiry = inquiry;
        this.choices = choices;
        this.rightAnswer = rightAnswer;
        this.wrongAnswer = wrongAnswer;
        this.alreadyAnswered = false;
    }
    
    correctAnswer(choice) {
        return choice === this.rightAnswer;
    }  
    
    getWrongAnswerResponse(choice) {
        this.alreadyAnswered = true;
        return this.wrongAnswer[choice];
    }
}



class Quiz {
    constructor (questionsList) {
        this.score = 0;
        this.questionsList = questionsList; //a list of question objects, Question class instances
        this.questionIndex = 0;
    }

    getQuestionByIndex() { 
        return this.questionsList[this.questionIndex]; //return to me a specific Question class object 
    }

    isEnded () {
        return this.questionsList.length === this.questionIndex;
    }

    guess(choice) {
        var question = this.getQuestionByIndex();
        if (question.correctAnswer(choice)){
            if (!question.alreadyAnswered) {
                this.score++; 
            }
            this.questionIndex++; 
        } else {
            var response = question.getWrongAnswerResponse(choice);
            alert(response);
        } 
        populate()
    }
}
