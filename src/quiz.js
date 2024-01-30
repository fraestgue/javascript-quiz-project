class Quiz {
    // YOUR CODE HERE:
    //
    constructor (questions, timeLimit, timeRemaining) {
        this.questions = questions; // []
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
        
        for (let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
        }
        return this.questions;  
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

    filterQuestionsByDifficulty(difficulty) {
          
        
        let questionsDifficulty = this.questions.filter((eachQuestions) => {

            if (difficulty < 1 || difficulty > 3) {
                return false;
            }

            if (eachQuestions.difficulty === difficulty){
                return true;
            }

        }) 
        return questionsDifficulty;
    }  

    averageDifficulty () {
       
        let averageResult = this.questions.reduce ((acc, eachNumber) => {

            return (acc + eachNumber) / this.questions.length

        }, 0)
    }


}

