class Question  {
    // YOUR CODE HERE:
    //
     constructor (text, choices, answer, difficulty) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.difficulty = difficulty;
     }

     //methods

     shuffleChoices() {
        return this.choices;  // REVISAR
     }



    // 2. shuffleChoices()
}

/* 
{
    text: "Que es JS?"
    choices: ["lenguaje programacion", "patata", "baile"]
    answer: "lenguaje programacion"
}
*/
