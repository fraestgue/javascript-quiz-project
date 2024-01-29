class Quiz {
    // YOUR CODE HERE:
    //
    constructor (questions, timeLimit, timeRemaining) {
        this.questions = questions;
        // [ObjetosPregunta1, ObjetoPregunta2]
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    
    moveToNextQuestion() {
        return this.currentQuestionIndex +=1;
    }

    shuffleQuestions() {
        return this.questions; // REVISAR
    }

    checkAnswer(answer) {
        if (this.questions[this.currentQuestionIndex].answer === answer ) {
            return this.correctAnswers += 1;
        }
    }

    hasEnded() {

        if (this.currentQuestionIndex < this.questions.length) {
            return false
        }
        if (this.questions.length = this.currentQuestionIndex) {
            return true
        } 
    }
}